var express=require('express');

//Create app
var app=express();

//Folder to serve
app.use(express.static('public'));

//start server
app.listen(3000,function(){
   console.log('express server up on port 3000');
});