// load the http library
var http = require('http');

// use library
// create a server
// res = repsonse, req = request
// write head, 200 = succes full (404 cannot find the page)
// which content do we sent
// end my request, after end nothing else can be sent anymore
// listen, first argument is an arbritary number
// 127.0.0.1 refers to yourself
http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World \n');
    })
    .listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/');
