//Create and remove files and directories

var fs = require('fs');

//synchronous
//fs.unlink('writeMe.txt');//Supprimer le fichier

//fs.mkdirSync('stuff');//creer un repertoire
//fs.rmdirSync('stuff');//supprimer un repertoire

//Asynchronous
//Creer rep stuff, lire le fichier readMe.txt et ecrire son contenu dans le fichier writeMe.txt

/*
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('./stuff/writeMe.txt', data);
    });
}); 
*/
//supprimer stuff et son contenu


fs.unlink('./stuff/writeMe.txt', function(){
        fs.rmdir('stuff', function(err, mssg){
            console.log('Successfully deleted ' + mssg);
        });
});
