//Reading and writting files
//Synchronous version

var fs = require('fs');
/*
var readMe = fs.readFileSync('readMe.txt', 'utf8');
//console.log(readMe);

var writeMe = fs.writeFileSync('writeMe.txt', readMe);
*/

//Asynchronous version (code non bloquant)

fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('writeMe.txt', data);
});

