//accessibilité des variable avec scope
//one et two ne seront pas accessibles depuis scope-b tandis que three et four le seront
var one = "one";
function two(){
    return "two";
}
// three and four are accessible everywhere due to the global object
global.three = "three";
global.four = function (){
    return "four";
};

exports.five = "five";
exports.six = function (){
    return "six";
};
