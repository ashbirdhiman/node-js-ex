var express=require('express');

var app=express();

app.get('/',function(req,res){

    const name = req.query.name || 'World';
    const greeting = `Hello, ${name}!`;
    res.send(greeting);
})


app.get('/add/:a/:b',function(req,res){
    var a=parseInt(req.params.a);
    var b=parseInt(req.params.b);
    res.send("The sum is "+(a+b));
})


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})