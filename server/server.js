const express=require('express');
const bodyParser=require('body-parser');


const {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
var {user}=require('./models/userdata');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  var todo=new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400);
    res.send(e);

  });
});

app.listen(3000,()=>{
  console.log('server is listening');
});
