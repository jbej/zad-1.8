var http = require('http');
var fs = reguire('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }else {
            response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
            response.write(<img src="https://cdn.pixabay.com/photo/2018/03/02/11/24/smiley-3192989_960_720.png" alt="error"/>)
            response.end();
    }
});

server.listen(8080);