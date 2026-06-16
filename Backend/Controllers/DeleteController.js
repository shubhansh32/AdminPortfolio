const Project=require("../Model/ProjectModel");
const { postProject } = require("./ProjectController");
const {updateProject}=require("./UpdateController");
const { getProject } = require("./ViewController");

const deleteProject=async(req,res)=>{
    try{

        const project=await Project.findByIdAndDelete(req.params.id);

        if(!project){
            return res.status(404).json({
              success:false,
              message:"Project Not Found",
            });
        }
        res.status(200).json({
            success:true,
            message:"Deleted Successfully",
        });
    }
    catch(err){
        res.status(500).json({message:err.message,success:"false"});
    }
}

module.exports={
    postProject,
    deleteProject,
    updateProject,
    getProject,
};