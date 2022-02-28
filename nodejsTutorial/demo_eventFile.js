var fs = require('fs');
var events = require('events');

var eventEmitter = new events.EventEmitter();

var rs = fs.createReadStream('./assets/txt/mynewFile1.txt');
rs.on('open', () => {
    console.log('The file is open');
});

var myEventHandler = function(){
    console.log('I hear a scream');
};
eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');