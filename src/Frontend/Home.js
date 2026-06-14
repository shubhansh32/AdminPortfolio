import axios from "axios";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Home() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    github: "",
    live: "",
  });
  
  const [image,setImage]=useState(null);
  const navigate=useNavigate();

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
      await axios.post("http://localhost:5001/api/project", formData);
      alert("Project Added");

      // optional: reset form
      setForm({
        title: "",
        description: "",
        github: "",
        live: "",
      });
    }catch (error) {
  console.log(error.response?.data || error.message);
}
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Title"
      />

         <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

     

      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
      />

      <input
        name="github"
        value={form.github}
        onChange={handleChange}
        placeholder="GitHub"
      />

      <input
        name="live"
        value={form.live}
        onChange={handleChange}
        placeholder="Live"
      />

      <button type="submit">Save</button>
    </form>

    <button onClick={()=>navigate("/view")}>View</button>

    </div>
    
  );

}

export default Home;