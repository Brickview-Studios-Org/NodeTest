
const http = require('http');

const server = http.createServer(function(req,res){
    if(req.url ==='/'){
        console.log('request arrive');
        res.write('Hello World');
        res.end();
        console.log('response sent');
    }

  
});

server.listen(3000);

console.log('started on 3000');

