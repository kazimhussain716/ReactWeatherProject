
// var names = ['Andrew','Kazim','Hussain'];

// names.forEach( function (name){
//     console.log('forEach :',name);
// });

// names.forEach((name) => {
//    console.log('Arrow Func :',name);
// })

// names.forEach((name) => console.log(name));

// var person = {
//   name : 'Ali',
//   greet : function() {
//    names.forEach( (name) =>{
//     console.log(this.name + ' says hi to '+name);
// });    
//   }
// }

// person.greet();

//Challenge Area

function add(a,b){
  return a+b;
}
console.log(add(2,3));

var addStatement = (a,b) =>{
  return a+b;
}  

var addSingleStatement = (a,b) => a+b;
console.log(addStatement(2,3));
console.log(addSingleStatement(2,3));