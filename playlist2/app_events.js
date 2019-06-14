var events = require('events');//require
var util = require ('util');
/*
var myEmitter = new events.EventEmitter();//creation de l'evenement
//listener
myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'Event successfully emited');//emission de l'evenement
*/

var Person =  function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter);

var seynabou = new Person('seynabou');
var abdoulaye = new Person('abdoulaye');
var moustapha = new Person('moustapha');
var people = [seynabou, abdoulaye, moustapha];

people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + ' said: '+ mssg);
    });
});

seynabou.emit('speak', 'Bonjour les gars!');
abdoulaye.emit('speak', 'Bienvenue');