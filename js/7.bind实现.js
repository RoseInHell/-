Function.prototype.bind2 = function(context) {
  // context 是 xx.call(obj) 括号内的obj
  // context 为null时 视为指向 window

  if (typeof this !== 'function') {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable")
  }

  //这里的 this 是 xx.bind(obj) 的 xx函数
  var self = this;

  // 获取bind2函数从第二个参数到最后一个参数
  var args = Array.prototype.slice.call(arguments, 1);


  var fbound = function() {
    var bindArgs = Array.prototype.slice.call(arguments);
    /* 
      当作为构造函数时，this 指向实例，self 指向绑定函数，
      因为下面一句 `fbound.prototype = this.prototype;`，
      已经修改了 fbound.prototype 为 绑定函数的 prototype，
      此时结果为 true，当结果为 true 的时候，this 指向实例。
    */
    /* 
      当作为普通函数时，this 指向 window，self 指向绑定函数，
      此时结果为 false，当结果为 false 的时候，this 指向绑定的 context。
    */
    return self.apply(this instanceof self ? this : context, args.concat(bindArgs));
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承函数的原型中的值
  
  // 用空函数做中转
  var fNOP = function () {};

  fNOP.prototype = self.prototype;
  fbound.prototype = new fNOP();
  return fbound;
}


var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind2(foo); 

bindFoo(); // 1


// var value = 2;
// var foo = {
//   value: 1,
//   bar: bar.bind(null)
// };

// function bar() {
//   console.log(this.value);
// }

// foo.bar() // 2
