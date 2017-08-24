console.log("statioc web server running");

'use strict';

var express = require('express');
var path = require('path');
var app = express();

//set the port
app.set('port', 8080);
app.use(express.static(path.join(__dirname, '/www'))); //static path

//send default page
app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname } );
});

// Listen for requests
var server = app.listen(app.get('port'), function () {
  console.log('The server is running on http://localhost:' + app.get('port'));
});
 