const EventEmitter = require('events');
const other = require('http');
var url = 'sdsdf'

class Logger extends EventEmitter{

    anylog(messege)
    {
        console.log(messege);
        //emmiter.emit('messageLogged');
    
        this.emit('messageLogged2',{id:1,url:"google.com"});
    }
    
    
}



module.exports = Logger;
