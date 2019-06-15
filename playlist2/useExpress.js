var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

/*
//sending text to the client
app.get('/', function(request, response){
    response.send('This is the Homepage');
});


//sending file to the client
app.get('/contact', function(request, response){
    response.sendFile(__dirname + '/contact.html');
});
*/


//sending text to the client
app.get('/', function(request, response){
    response.render('index');
});


//sending file to the client
app.get('/contact', function(request, response){
    response.render('contact', {qs: request.query});
});

app.post('/contact', urlencodedParser, function(request, response){
    console.log(request.body);
    response.render('contact-success', {data: request.body});
});


//Express route params
/*
app.get('/profile/:name', function(request, response){
    response.send('You requested to see a profile with the name of ' + request.params.name);
});
*/
//en utilisant ejs
app.get('/profile/:name', function(request, response){
    var data = {age : 29, job: 'ninja', hobbies: ['eating', 'dancing', 'singing']};
    response.render('profile', {person: request.params.name, data : data});//we con add data in the view by passing object to the render method
});
app.listen(3000);