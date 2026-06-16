const express=require("express");
const router=express.Router();

const upload=require("../Middleware/upload");

const{
    postProject,
    deleteProject,
    getProject,
}=require("../Controllers/DeleteController");

router.post("/", upload.single("image"), postProject);

router.delete("/:id", deleteProject);

module.exports = router;