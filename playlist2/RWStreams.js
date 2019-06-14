var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/*
myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    myWriteStream.write(chunk);
});
*/
//we can use pipe instead

myReadStream.pipe(myWriteStream);

/*
var server = http.createServer(function(request, response){
    console.log('request was made: ' +request.url)
    response.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    response.end('What\'s up guys');
});

server.listen(3000, '127.0.0.1');
console.log('hi, listeninig on port 3000');
*/