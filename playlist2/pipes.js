var http = require('http');
var fs = require('fs');

//pour envoyer un text
/*
var server = http.createServer(function(request, response){
    console.log('request was made: ' +request.url);
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    myReadStream.pipe(response);
});
*/

//Pour envoyer du html au client
/*
var server = http.createServer(function(request, response){
    console.log('request was made: ' +request.url);
    response.writeHead(200, {'Content-Type' : 'text/html'});
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(response);
});
*/

//envoyer du JSON au client

var server = http.createServer(function(request, response){
    console.log('request was made: ' +request.url);
    response.writeHead(200, {'Content-Type' : 'application/json'});
    var myObj = {
        name: 'seynabou',
        job: 'ingeneer',
        age: 24
    };
    response.end(JSON.stringify(myObj));
    
});

server.listen(3000, '127.0.0.1');
console.log('listeninig on port 3000');