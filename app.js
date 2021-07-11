
const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        res.write('Hello World');
        res.end();
    }

  
});

server.on('connection', (scocekt) =>{
console.log("new  connection ");
});

server.listen(80);

console.log('started on 80');

