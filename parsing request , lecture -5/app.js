const http = require('http');
const userrequesthandler =require('./parsing.js');
const server = http.createServer();


const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});