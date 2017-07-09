var mongoose=require('mongoose');

var user =mongoose.model('Userdata',{
  user_name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

module.exports={user};
