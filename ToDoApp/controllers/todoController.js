var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'ride horse'}];
var mongoose = require('mongoose');


//Connexion à la base de données
//mongoose.connect('http://127.0.0.1:27017/todoApp');
mongoose.connect("mongodb://localhost:27017/todoApp", { useNewUrlParser: true });

//create a schema this is like blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});



module.exports = function(app){

app.get('/todo', function(request, response){
    response.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(request, response){
    data.push(request.body);
    response.render('todo', {todos: data});
    response.json(data);
});

app.delete('/todo:item', function(request, response){
  var index = data.indexOf(request.body);
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, "-") !== request.params.item;
  }); 
  response.json(data); 
});

};