/* 
  JSONP原理：利用 <script> 标签没有跨域限制的漏洞，
  网页可以得到从其他来源动态产生的 JSON 数据。
  JSONP请求一定需要对方的服务器做支持才可以。
  
  优点：JSONP优点是简单兼容性好，可用于解决主流浏览器的跨域数据访问的问题。
  缺点：仅支持get方法具有局限性,不安全可能会遭受XSS攻击。

  实现流程：
    1.声明一个回调函数，其函数名(如show)当做参数值，要传递给跨域请求数据的服务器，
      函数形参为要获取目标数据(服务器返回的data)。
    2.创建一个<script>标签，把那个跨域的API数据接口地址，赋值给script的src,
      还要在这个地址中向服务器传递该函数名（可以通过问号传参:?callback=show）。
    3.服务器接收到请求后，需要进行特殊的处理：把传递进来的函数名和它需要给你的
      数据拼接成一个字符串,例如：传递进去的函数名是show，它准备好的数据是
      show('我不爱你')。
    4.最后服务器把准备的数据通过HTTP协议返回给客户端，客户端再调用执行之前声明的
      回调函数（show），对返回的数据进行操作。
*/

function jsonp({url, params, callback}) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    window[callback] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    }
    params = { ...params, callback };
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join('&')}`;
    document.body.appendChild(script);
  })
}

jsonp({
  url: 'http://localhost:3000/say',
  params: { wd: 'l love you' },
  callback: 'show'
}).then(res => {
  console.log(res)
})