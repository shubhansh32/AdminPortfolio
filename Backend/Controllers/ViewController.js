const Project=require("../Model/ProjectModel");

const getProject=async(req,res)=>{
try{
const Projects=await Project.find();

res.status(200).json({
    success:true,
    Projects,
})
}
catch(err){
    return res.status(505).json({message:err.message,
        success:false,
    });
}
};

module.exports={getProject};