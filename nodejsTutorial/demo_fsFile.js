var fs = require('fs');

fs.appendFile('./assets/txt/mynewFile1.txt', 'Hello Content mynewFile1!', function(err){
    if (err) throw err;
    console.log('Saved!');
});