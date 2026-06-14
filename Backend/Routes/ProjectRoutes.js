const express = require("express");
const router = express.Router();

const upload = require("../Middleware/upload");

const {
  postProject,
  deleteProject,
  updateProject,
  getProjects,
} = require("../Controllers/DeleteController");

router.get("/test", (req, res) => {
  res.send("Route Working");
});

router.post("/", upload.single("image"), postProject);

router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;