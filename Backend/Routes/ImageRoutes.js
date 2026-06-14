const express=require("express");
const router=express.Router();

const {getImages}=require("../Controllers/ImageController");


router.get("/", getImages);

module.exports = router;