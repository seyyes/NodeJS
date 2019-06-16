var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'ride horse'}];
var mongoose = require('mongoose');


//Connexion à la base de données
mongoose.connect("mongodb://localhost:27017/todoApp", { useNewUrlParser: true });

//create a schema this is like blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);
/*
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
  if(err) throw err;
  console.log('item saved');
});
*/


module.exports = function(app){

app.get('/todo', function(request, response){
  //get data from mongodb and pass it to the view
  Todo.find({}, function(err, data){
    if(err) throw err;
    response.render('todo', {todos: data});
  });
    
});

app.post('/todo', urlencodedParser, function(request, response){
    //get data from the view and add it to mongodb
    var newTodo = Todo(request.body).save(function(err, data){
      if(err) throw err;
      response.json(data);

    }); 
});

app.delete('/todo/:item', function(request, response){
  //delete the requested item from mongodb
  Todo.find({item: request.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
    if(err) throw err;
    response.json(data);
  });
   
});

};