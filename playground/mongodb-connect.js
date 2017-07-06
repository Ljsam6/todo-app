// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todo-app',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongo server');
  }
  console.log('mongo db connected ');


  // db.collection('todos').insertOne({
  //   text:'sabke sab chtye he',
  //   completed:false
  // },(err,result)=>{
  //   if(err){return console.log('unale to insert in todo',err);}
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

   db.collection('users').insertOne({
     name:'lijo',
     age:19,
     location:'ghansoli'
   },(err,result)=>{
     if(err){return console.log('unale to insert in users',err);}
      console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
   });

  db.close();
});
