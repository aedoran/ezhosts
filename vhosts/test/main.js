
var app = require('express').createServer();

app.get('/', function(req, res){
  res.send('hello world');
});


module.exports.app = app;
