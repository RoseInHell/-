class Dep {
  constructor() {
    this.subscribers = new Set();
  }

  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  notify() {
    this.subscribers.forEach(effect => {
      effect()
    })
  }
}

let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
  effect();
  activeEffect = null;
}


// Map({key: value}): key是一个字符串
// WeakMao({key(对象): value}): key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 1.根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap); 
  }

  // 2.去除具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}


// vue2对raw进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    const dep = getDep(raw, key)
    let value = raw[key];

    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          dep.notify();
        }
        
      }
    })
  })
  return raw
}


// 测试代码
const info = reactive({ counter: 100, name: 'aaaa' });
const foo = reactive({ height: 1.88 });

const dep = new Dep();

// watchEffect1
watchEffect(function () {
  console.log("Effect1", info.counter * 2, info.name);
})

// watchEffect2
watchEffect(function () {
  console.log("Effect2", info.counter * info.counter);
})

// watchEffect3
watchEffect(function () {
  console.log("Effect3", info.counter + 10, info.name);
})

// watchEffect4
watchEffect(function () {
  console.log("Effect4", foo.height);
})

// info.counter++;

// info.name = "lilei";
foo.height = 2


