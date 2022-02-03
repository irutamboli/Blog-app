const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    
   
    
    title:{
       type :"String",
       required:true
      
    },

    author:{
        type:"string",
        required:true
    },

    description:{
        type:"String",
        require:true
           
    },

    createdon:{
        type:Date,
        default:+new Date()
    }
   
    

    
   
   
})


const post = mongoose.model("post",PostSchema);
module.exports = post; 