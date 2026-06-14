const project=require("../Model/ProjectModel");

const postProject=async(req,res)=>{
    try{

        const{title,description,github,live}=req.body;

        const newProject=await project.create({
         title,
         image:req.file.filename,
         description,
         github,
         live,
        });

        return res.status(200).json({
              success:true,
              message:"Project Added Successfully",
              project:newProject
        });
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:err.message,
        })
    }
}
module.exports={
    postProject
};