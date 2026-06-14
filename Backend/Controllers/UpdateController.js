const Project=require("../Model/ProjectModel");

const updateProject=async (req,res)=>{
    try{
      const updatedProject=await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
new:true
      });
          if (!updatedProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
    }
    catch(err){
        return res.status(500).json({
          message:err.message,
          updateProject,
        });
    }
}

module.exports={updateProject};