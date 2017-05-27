var http = require('http');
var express = require('express');
var fs = require('fs');

// Create the app
var app = express();

// This is for hosting files
// Anything in the public directory will be served
// This is just like python -m SimpleHTTPServer
// We could also add routes, but aren't doing so here
app.use(express.static('__dirname'));
app.use('/scripts', express.static(__dirname + '/node_modules/*'));

var server = app.listen(process.env.PORT || 80, listen);

// This call back just tells us that the server has started
function listen() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

// var server = http.createServer(function(req, res){
// 	console.log('request was made:' + req.url);
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Bruh...\n');
// });


