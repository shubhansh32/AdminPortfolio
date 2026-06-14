const mongoose=require("mongoose");

const projectSchema=mongoose.Schema({

    title:{
      type:String,
      required:true,
    },
    image:{
        type:String,
      required:true,
    },
    description:{
        type:String,
      required:true,
    },
    github:{
         type:String,
      required:true,
    },
    live:{
          type:String,
      required:true,
    }

});
module.exports=mongoose.model("Project",projectSchema);