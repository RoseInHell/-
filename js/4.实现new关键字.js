/* 
  1.创建一个新对象
  2.链接到原型 obj.__proto__ = constructor.prototype
  3.绑定this. apply
  4.返回新对象(如果函数有返回对象则返回该对象)
*/

function objectFactory() {
  var obj = new Object();
  /* 
    取出第一个参数，就是我们要传入的构造函数。
    此外因为 shift 会修改原数组，所以 arguments 会被去除第一个参数
  */
  var Constructor = [].shift.call(arguments);
  
  obj.__proto__ = Constructor.prototype;
  
  // 执行函数创建实例，并且绑定this
  var ret = Constructor.apply(obj, arguments);

  // ret || obj 这里这么写考虑了构造函数显示返回 null 的情况
  return typeof ret === 'object' ? ret || obj : obj;
}

function Otaku (name, age) {
  this.name = name;
  this.age = age;

  this.habit = 'Games';
}

var person = objectFactory(Otaku, 'Kevin', '18')


var p = [];
var A = new Function();
A.prototype = p;
var a = new A; // a 变成了数组对象
a.push(1);
console.log(a.length);
console.log(p.length);