## Node 中的 javascript

- EcmaScript

  - 没有 DOM、BOM

- 核心模块

  - Node 为 JavaScript 提供了很多服务器级别的 API, 这些 API 绝大多数都被包装到了一个具名的核心模块中。
  - 例如 文件操作的 `fs` 核心模块，http服务器构建的 `http` 模块， `path` 路径操作模块， `os` 操作系统信息模块

  ```javascript
  var fs = require('fs');
  var http = require('http');
  ```

- require 是一个方法，用来加载模块的
- Node中，模块有三种：
  1. 具名的核心模块，例如 fs、http
  2. 用户自己编写的文件模块，相对路径必须加 ./
  3. 在 Node 中，没有全局作用域，只有模块作用域
     - 外部访问不到内部， 内部也访问不到外部