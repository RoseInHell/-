### HTTP 
- 使用Node轻松构建一个Web服务器
1. 加载http核心模块

   ```javascript
     var http = require('http');
   ```

   

2. 使用http.createServer() 方法创建一个Web服务器 

   - 返回一个serve实例

   ```javascript
   var server = http.createServer();
   ```

3. 服务器要做的事

   - 提供对数据的服务
   - 发请求
   - 接收请求
   - 处理请求
   - 给个反馈（发送响应）
   - 注册 request 请求事件
   - 当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数
   - request 请求事件处理函数，需要接收两个参数
     - request  请求对象
       - 请求对象可以用来获取客户端的一些请求信息，例如请求路径
     - response 响应对象
       - 响应对象可以用来给客户端发送响应消息

   ```javascript
   server.on('request', () => {
       console.log('收到客户端的请求了');
   }) // 普通情况
   server.on('request', (request, response) => {
   	console.log('收到客户端的请求了，请求路径是：' + request.url);
       
       // response 对象有一方法：write 可以用来给客户端发送响应数据
       // write 可用多次，但最后一定要使用end来结束响应，否则客户端会一直等待
       response.write('hello');
       response.write('node.js');
       
       // 告诉客户端，我的话说完了，你可以呈递给用户了
       response.end();
   })
   ```

   - 根据不同的请求路径发送不同的响应结果
   - 1. 获取请求路径
        - request.url 获取到的是端口号之后的那一部分路径，所有 url 都是以 / 开头的
     2. 判断路径处理响应

   ```javascript
   server.on('request', (request, response) => {
   	console.log('收到客户端的请求了，请求路径是：' + request.url);
     var url = request.url;
     // 响应内容只能是二进制数据或者字符串
     if (url === '/') {
         response.end('index page')
     } else if (url === '/login') {
         response.end('login page')
     } else {
         response.end('404 Not Found')
     }
   })
   ```

   

4. 绑定端口号，启动服务器

   ```javascript
   server.listen(3000, () =>{
   	console.log('服务器启动成功，可通过 http://127.0.0.1:3000/ 来进行访问');
   })
   ```

   

5. ```javascript
   server.on('request', function(req, res) {
       // 在服务器端默认发送的数据，其实是 utf8 编码的内容
       // 但是浏览器不知道 会按默认操作系统去解析，中文操作系统默认 gbk
       // 解决方法 http 协议中， Content-Type 就是用来告知发送数据类型
       res.setHeader('Content-Type', 'text/plain; charset=utf-8') // text/plain 普通文本
       // text/html html格式文本
       res.end('hello 世界')
   })
   ```

   