const express=require("express");
const router=express.Router();

const {updateProject}=require("../Controllers/DeleteController");
router.put("/:id",updateProject);
module.exports=router;