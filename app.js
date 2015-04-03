var express = require('express');
var app = express();
var portnum = 8082;


app.get('/index', function (req, res) {
  res.send('Hello World!' + ' My name is ' + req.query.me);
});

var server = app.listen(portnum, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});