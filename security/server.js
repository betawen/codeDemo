const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        contentType: 'text/plain'
    })
    res.end('successful!')
}).listen(8888);

console.log('server is running on http://localhost:8888');
