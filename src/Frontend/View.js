import { useEffect, useState } from "react";
import axios from "axios";

function View() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/project")
      .then((res) => {
        console.log("API Response:", res.data);
        setProject(res.data.Projects);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // 👇 Delete function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/project/${id}`);

      // remove deleted item from UI
      setProject((prev) => prev.filter((item) => item._id !== id));

      console.log("Deleted successfully");
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

            <img
              src={`http://localhost:5001/uploads/${item.image}`}
              alt={item.title}
              width="250"
              onError={(e) => {
                console.log(
                  "Image failed:",
                  `http://localhost:5001/uploads/${item.image}`
                );
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

            {/* 👇 Delete Button */}
            <br />
            <button
              onClick={() => handleDelete(item._id)}
              style={{ color: "white", background: "red", marginTop: "10px" }}
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