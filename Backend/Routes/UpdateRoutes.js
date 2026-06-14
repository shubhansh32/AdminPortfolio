const express=require("express");
const router=express.Router();

const {updateProject}=require("../Controllers/DeleteController");
router.get("/:id",updateProject);
module.exports=router;