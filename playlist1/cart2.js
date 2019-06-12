function Cart (){
    this.items = [];
}

Cart.prototype.addItem = function (name, price){
    this.items.push({
        name: name,
        price: price
    });
}
Cart.prototype.total = function (){
    return this.items.reduce(function(a,b){
        return a + b.price;
    }, 0);
}

module.exports = 10;