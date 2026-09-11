const http=require('http');



const express=require('express');
const server=http.createServer(requesthandler);
const port=3002;
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
