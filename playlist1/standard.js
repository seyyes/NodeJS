//Input and Output
/*
Process.stdin.setEncoding('utf8');

Process.stdin.on('data', function(chunk){
    Process.stdout.write('chunk:' +.toString());
} );

Process.stdin.on('end',function(){
    process.stdout.write('end')
});

*/

var trans = require('stream').Transform();
trans._transform = function(chunk, enc, done){
    this.push(chunk.toString().split('').map(funtion(char){
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }).join(''));
    done();
};
process.stdin.pipe(trans).pipe(process.stdout);