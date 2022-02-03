const mongoose=require('mongoose')
const bcrypt = require("bcrypt")
const BlogSchema=mongoose.Schema({
    
   
    
    username:{
        type:"String",
        required:true 
    },

    password:{
        type:"String",
        required:true    
    },

    name:{
        type:"string",
        required:true
    },

    email:{
        type:"string",
        required:true 
    },
  
   
})

//here type password will compare with the crypted password and the object will be returned back
BlogSchema.methods.correctPassword = async (typedPassword,originalPassword)=>{

    return await bcrypt.compare(typedPassword,originalPassword)
}

const blog = mongoose.model("blog",BlogSchema);
module.exports = blog; 