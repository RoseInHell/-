let express = require('express');
let app = express();

app.get('/say', function(req, res) {
  let { wd, callback } = req.query;
  console.log(wd);
  res.end(`${callback}('i love you')`); 
})

app.listen(3000, () => {
  console.log(`服务器启动在3000端口`)
})