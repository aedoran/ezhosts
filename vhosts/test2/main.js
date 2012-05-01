
var app = require('express').createServer();
app.get('/', function(req, res){
  res.send('hello world2');
});


module.exports.app = app;
