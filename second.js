const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
    res.writeHead(200, { 'Content-Type':'text/plain'});
    res.end('Hello from server');
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});