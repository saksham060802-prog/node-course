const http = require('http');
const { requesthandler } = require('./handler.js');

const server = http.createServer(requesthandler);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});