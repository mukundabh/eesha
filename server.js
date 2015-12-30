/* 
* @Author: bmdarshan
* @Date:   2015-12-24 15:26:33
* @Last Modified by:   bmdarshan
* @Last Modified time: 2015-12-26 14:12:04
*/

'use strict';

var http = require("http");
var port = 9000;
var serverUrl = "localhost";
var fs = require('fs');

var server = http.createServer(function(req, res) {

  if(req.url == "/") {

    fs.readFile("index.html", function(err, text){
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
    return;
  }

  if(req.url.indexOf('.png') != -1){
    fs.readFile('public/assets/eeshalogo.png', function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }

  if(req.url.indexOf('.css') != -1){
    var url = req.url.substr(1);
    fs.readFile(url, function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }

  if(req.url.indexOf('.js') != -1){
    var url = req.url.substr(1);
    fs.readFile(url, function (err, data) {
      if (err) console.log(err);
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });

  }

});

console.log("Listening at " + serverUrl + ":" + port);
server.listen(port, serverUrl);