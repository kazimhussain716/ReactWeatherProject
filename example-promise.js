//  function getTempCallback(location,callback){
//      callback(undefined,75);
//      callback('City not found');
//  }

//  getTempCallback('Philadelphia',function (err,temp){
//    if(err){
//     console.log('err',err);
//    }
//    else {
//       console.log('Success ',temp);
//    }
//  });

//  function getTempPromise(location) {
//    return new Promise( function (resolve,reject){
//       setTimeout(function (){
//      reject('City not found');
//       resolve(79);
//       },1000);
//     })
//  }

//  getTempPromise('Philadelphia').then( function(temp){
//    console.log('Promise success ',temp);
//  } ,function(err){
// console.log('Promise error ',err);
//  })

//Challenge Area

function addPromise (a,b) {
   return new Promise( function ( resolve , reject) {
     if(typeof a ==='number' && typeof b ==='number' && arguments.length === 2) {
         resolve(a+b);
     }
     else {
      reject('Both arguments were not passed or both not number')
     }
   })
}

addPromise(6,3).then( function(result) {
   console.log('Success ',result);
},
function (err) {
  console.log('Fail',err);
})