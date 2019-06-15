var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();//setting the express app

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public')); // middleWare

//fire controllers
//pour acceder aux fonctions de todoController
todoController(app);


//listen to port
app.listen(3000);
console.log('listening to port 3000');
