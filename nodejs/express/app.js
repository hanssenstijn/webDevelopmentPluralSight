// install express
var express = require('express');
// create instance
var app = express();

// calls a get on the txt, send a message
// set up app, under the folder /hello.txt
app.get('/hello.txt', function(req, res) {
    res.send('Hello World');
});

// run the server, app.listen gets the server running
// everything is ready start the serer now
var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});
