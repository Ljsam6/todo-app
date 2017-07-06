// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongo server');
  }
  console.log('mongo db connected ');

  //deleteMany
// db.collection('todos').deleteMany({text:'come back'}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log('could not delete file');
// });

//deleteOne
// db.collection('todos').deleteOne({text:'come back'}).then((result)=>{
//   console.log(result);
// },(err)=>{
//   console.log('could not delete file');
// });

//findOneAndDelete
db.collection('todos').findOneAndDelete({completed:false}).then((result)=>{
  console.log(result);});


});
