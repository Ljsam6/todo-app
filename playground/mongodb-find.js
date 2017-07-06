// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongo server');
  }
  console.log('mongo db connected ');

// db.collection('todos').find({_id:new ObjectID("595d028c78bdd6183c7aba22")} ).toArray().then((docs)=>{
//   console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to display docs');
// });

// db.collection('todos').find().count().then((count)=>{
//   console.log(`todos count: ${count}`);
// },(err)=>{
//   console.log('unable to display docs');
// });

db.collection('users').find({name:'lijo'} ).toArray().then((docs)=>{
  console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to display docs'+err);
});


});
