import { useEffect, useState } from "react";
import axios from "axios";

function View() {
  const [project, setProject] = useState([]);

  // GET ALL PROJECTS
  useEffect(() => {
    axios
      .get("https://adminportfolio-6swc.onrender.com/api/project")
      .then((res) => {
        console.log("API Response:", res.data);

        // ✅ SAFE HANDLING (fixes all backend key issues)
        const data =
          res.data.projects ||
          res.data.Projects ||
          res.data.Project ||
          res.data;

        setProject(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  }, []);

  // DELETE PROJECT
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://adminportfolio-6swc.onrender.com/api/project/${id}`
      );

      if (res.data?.success !== false) {
        setProject((prev) => prev.filter((item) => item._id !== id));
        console.log("Deleted successfully");
      }
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <div>
      <h1>Projects</h1>

      {project.length === 0 ? (
        <p>No Projects Found</p>
      ) : (
        project.map((item) => (
          <div key={item._id}>
            <h3>{item.title}</h3>

            <p>
              <strong>Image Name:</strong> {item.image}
            </p>

            {/* IMAGE */}
            <img
              src={`https://adminportfolio-6swc.onrender.com/uploads/${item.image}`}
              alt={item.title}
              width="250"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/250";
              }}
            />

            <p>{item.description}</p>

            <a href={item.github} target="_blank" rel="noreferrer">
              GitHub
            </a>

            <br />

            <a href={item.live} target="_blank" rel="noreferrer">
              Live Demo
            </a>

            <br />

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(item._id)}
              style={{
                color: "white",
                background: "red",
                marginTop: "10px",
              }}
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default View;