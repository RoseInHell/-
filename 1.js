//实现call
Function.prototype.call2 = function(context) {
  // context 是 xx.call(obj) 括号内的obj
  // context 为null时 视为指向 window
  var context = context || window
  
  /* 
    给context定义一个属性名为fn
    这里的 this 是 xx.call(obj) 的 xx函数
    本质上是在context中定义一个属性 fn
    fn有xx方法
  */
  context.fn = this;

  // 用来接受传递的参数
  var args = [];

  // i从1开始是因为第一个参数为要绑定的对象
  for(var i=1; i<arguments.length; i++) {
    // 这里用字符串拼接是为了 后续 eval 解析
    args.push('arguments[' + i + ']');
  }
  console.log(args.toString())
  /* 

    利用 eval 执行 这里的 arg 会自动调用 Array.toString()
    当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法
    MDN -- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString
  */
  var result = eval('context.fn(' + args + ')')

  // 删除context.fn这个属性 因为是临时创建的
  delete context.fn;

  // 返回 result
  return result
}

// 不用eval版本
Function.prototype.call3 = function(context) {
  var context = context || window;

  context.fn = this;
  var args = [];
  for (var i=1; i<arguments.length; i++) {
    args.push(arguments[i]);
  }

  var result = context.fn(...args);

  delete context.fn;

  return result;
}

var value = 2;

var obj = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name,
    age
  }
}

bar.call(null)

console.log(bar.call2(obj, 'kevin', 18))