const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 5001;

const connectdb = require("./Backend/config/db");
connectdb();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/image", require("./Backend/Routes/ImageRoutes"));
app.use("/api/project", require("./Backend/Routes/ProjectRoutes")); // ✅ ONLY ONE
app.use("/project", require("./Backend/Routes/ViewRoutes"));

// static
app.use("/uploads", express.static(path.join(__dirname, "Backend/uploads")));

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});