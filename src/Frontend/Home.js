import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
  });

  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", form.title);
    formData.append("image", image);
    formData.append("description", form.description);
    formData.append("github", form.github);
    formData.append("live", form.live);

    try {
      await axios.post(
        "https://adminportfolio-6swc.onrender.com/api/project",
        formData
      );

      alert("Project Added Successfully");

      setForm({
        title: "",
        description: "",
        github: "",
        live: "",
      });

      setImage(null);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="home-container">
      <div className="form-card">
        <h1>Add Project</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            required
          />

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Project Description"
            rows="5"
            required
          />

          <input
            type="text"
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="GitHub URL"
            required
          />

          <input
            type="text"
            name="live"
            value={form.live}
            onChange={handleChange}
            placeholder="Live Demo URL"
            required
          />

          <button type="submit" className="save-btn">
            Save Project
          </button>
        </form>

        <button
          className="view-btn"
          onClick={() => navigate("/view")}
        >
          View Projects
        </button>
      </div>
    </div>
  );
}

export default Home;