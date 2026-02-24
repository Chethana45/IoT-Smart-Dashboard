const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    let filePath = './web.html';

    if (req.url !== '/') {
        filePath = '.' + req.url;
    }

    const extname = path.extname(filePath);

    let contentType = 'text/html';
    if (extname === '.css') contentType = 'text/css';
    if (extname === '.js') contentType = 'text/javascript';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end("File Not Found");
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});