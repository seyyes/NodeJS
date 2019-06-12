var util = require('util');
var log = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log('This is a message');
log2('This is a second message');

var person = {
    name: 'Andrew',
    interests: ['javascript', 'books'],
};

//console.log(util.inspect(util, { colors: true}));

function User(){

}
User.prototype.loggedIn = function(){
    return true;
}

function Admin(){
    
}

util.inherits(Admin, User);
admin = new Admin();
console.log(admin.loggedIn());