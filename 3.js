// 图片懒加载
// 跨域
// es6中的解构中的...和上面的区别
// es6中的扩展运算符...的实现原理
// import和require的区别
// http1.1和http2.0区别
// 事件流
// computed原理
// webpack实现原理
// 怎么解决点击后300ms的延迟
// loader是干啥的，plugin是干啥的，plugin的原理？
// jsbridge 原理
// XSS CSRF
// promise 是放在哪个线程里的
// encodeURIComponent() 函数 与 encodeURI() 函数的区别
// requestAnimationFrame

const MyPromise = require('./1');

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000); 
})

promise.then(value => {
  console.log(1)
  console.log('resolve', value);
})

promise.then(value => {
  console.log(2)
  console.log('resolve', value);
})

promise.then(value => {
  console.log(3)
  console.log('resolve', value);
})

