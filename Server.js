const dotenv=require("dotenv");
const express = require("express");
const projectRoutes=require("./Backend/Routes/ProjectRoutes");
const cors=require("cors");
const path=require("path");

dotenv.config();

const connectdb=require("./Backend/config/db");

connectdb();

const app=express();

app.use(cors());
app.use(express.json());

app.use("/image", require("./Backend/Routes/imageRoutes"));
app.use("/api/project", projectRoutes);
app.use("/project",require("./Backend/Routes/ViewRoutes"));
app.use("/uploads", express.static(path.join(__dirname, "Backend/uploads")));
app.use("/api/project", require("./Backend/Routes/DeleteRoutes"));


app.listen(5001, () => {
  console.log("Server Running");
});