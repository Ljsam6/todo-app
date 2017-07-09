// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/todo-app',(err,db)=>{
  if(err){
    return console.log('unable to connect to mongo server');
  }
  console.log('mongo db connected ');

// db.collection('todos').findOneAndUpdate({
//   _id:new ObjectID('595e855c95a6ee27f009a301')
// }, {
//        $set:{
//          completed:true
//        }
//      },{
//        returnOriginal:false
//      }).then((result)=>{
//        console.log(result);
//      });

   db.collection('users').findOneAndUpdate({_id:new ObjectID('595d045db7f20c1724c55b04')},
 {
   $set:{name:'mummy'},
   $inc:{
     age:1
   }
 },{
   returnOriginal:false
 }).then((result)=>{
   console.log(result);
 });



});
