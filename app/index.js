var express = require('express');
var port = process.env.PORT || 80;
var app = express();

// include static middleware
app.use(express.static(__dirname + '/public'));

// start server
app.listen(port);
console.log("Server running at http://127.0.0.1:" + port + "/");