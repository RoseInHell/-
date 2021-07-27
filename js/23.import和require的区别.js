/* 
  import是ES6的一个语法标准，兼容浏览器需要转化成ES5的语法 
  require采用CommonJS/AMD规范
*/

/* 
  import是编译时调用，必须放在代码的开头 
  require是运行时调用，可以运用在代码的任何地方
*/

/* 
  import是解构过程，由于浏览器兼容问题，
  需要在node中用babel将ES6语法转化成为ES5语法再执行

  require是赋值过程，require的结果就是module.exports后面的内容，
  例如对象、函数、字符串、数组等，最终把require的结果赋值给某个变量

*/