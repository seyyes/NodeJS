var promise = new Promise((resolve, reject)=> {
  var value = true;
  setTimeout(() =>{
  if(value){
    resolve("this is true");
  }
  else{
    reject("Not a true value");
  }
}, 2000)
});

promise.then(
  resolved => console.log(resolved),
  error =>console.error(error)
);

var time = 0;
setInterval(function(){
  time+=2
  console.log(time + " Yep 2 second have passed")
},2000);