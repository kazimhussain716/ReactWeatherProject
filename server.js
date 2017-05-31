var express=require('express');

//Create app
var app=express();

const PORT = process.env.PORT || 3000;

app.use(function(req,res,next){
    if(req.headers['x-forwarded-proto'] === 'htpp'){
       next();
    }
    else{
     res.redirect('http://'+req.hostname+req.url);
    }
})
//Folder to serve
app.use(express.static('public'));

//start server
app.listen(PORT,function(){
   console.log('express server up on PORT ' + PORT);
});