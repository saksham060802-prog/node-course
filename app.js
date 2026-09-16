const http=require('http');

const express=require('express');

const requesthandler=require('./user');
const app=express();

const server=http.createServer(app);

const PORT=3002;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});