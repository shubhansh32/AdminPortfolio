const Image = require("../Model/ImageModel");

const getImages=async(req,res)=>{
    try{
       const images=await Image.find();

       res.status(200).json(
        {
            success:true,
            images,
        }
       );

    }
    catch(err){
         res.status(500).json({
      success: false,
      message: err.message,
    });
    }
}
module.exports={
    getImages
};