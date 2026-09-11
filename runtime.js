const http= require('http');
const testingruntime=require('./runtime');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    testngruntime();
});

const PORT=3002; 
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});   