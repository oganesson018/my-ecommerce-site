const http = require('http');
const url =  require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer(function (req, res) {
    //var q = url.parse(req.url, true);

    let filePath = '.' + req.url;
    if(filePath === "./") filePath = "./index.html";

    const path = require('path');
    const extanme = path.extname(filePath);
    let contentType = "text/html";
    if(extanme === ".css") contentType = "text/css";
    if(extanme === ".xml") contentType = "text/xml";
    if(extanme === ".js") contentType = "application/js";


    fs.readFile(filePath, function(err, htmlDoc){
        if(err){
            res.writeHead(200, {'Content-Type': 'text/html'});
            return res.end("404: File Not Found!!!!!");
        }
        res.writeHead(200, {'Content-Type': contentType});
        var q = url.parse(req.url, true).query;
        var txt= q.fname + ' ' + q.lname;
        res.write(htmlDoc);
        res.end();  
    });

});

server.listen(8080);