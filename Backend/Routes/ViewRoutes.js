const express=require("express");
const router=express.Router();

const upload=require("../Middleware/upload");
const{getProject}=require("../Controllers/ViewController");

router.get("/",getProject);
module.exports=router;