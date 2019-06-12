//les modules
var items = [];
function addItem(name, price){
    items.push({
        name: name,
        price: price
    });
}
function total(){
    return items.reduce(function(a,b){
        return a + b.price;
    }, 0);
}

exports.addItem = addItem;
exports.total = total;

//Constructeur
/*exports.Cart = function(){

}
*/