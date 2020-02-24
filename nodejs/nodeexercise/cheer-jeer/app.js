var express = require('express');
var app = express();

// app.get defining a new route
app.get('/cheer.txt', function(request, response) {
    response.send('You have quite lovely eys.')
});

// .send please sent this response
app.get('/jeer.txt', function(request, response) {
    response.send('Your mother was indeed a hampset.');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});
