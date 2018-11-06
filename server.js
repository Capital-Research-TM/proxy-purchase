var express = require('express');
var app = express();

var host = 3002;
app.listen(host, () => {
  console.log('successfully connected');
})
app.use(express.static('/'))
