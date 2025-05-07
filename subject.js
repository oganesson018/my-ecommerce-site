const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type' : 'text/json'});
    res.write('');
    
});

server.listen(4040);