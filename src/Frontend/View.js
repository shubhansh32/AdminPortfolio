import { useEffect, useState } from "react";
import axios from "axios";
import "./View.css";

function View() {
  const [project, setProject] = useState([]);
  const [contacts, setContacts] = useState([]);

  // GET PROJECTS
  useEffect(() => {
    axios
      .get("https://adminportfolio-6swc.onrender.com/project")
      .then((res) => {
        const data =
          res.data.projects ||
          res.data.Projects ||
          res.data.Project ||
          res.data;

        setProject(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.log("Fetch Error:", err);
      });
  }, []);

  // DELETE PROJECT
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://adminportfolio-6swc.onrender.com/api/project/${id}`
      );

      setProject((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // EDIT PROJECT
  const handleEdit = async (item) => {
    const newTitle = prompt("Enter new title:", item.title);
    const newDescription = prompt(
      "Enter new description:",
      item.description
    );
    const newGithub = prompt("Enter new Github link:", item.github);
    const newLive = prompt("Enter new Live link:", item.live);

    if (!newTitle) return;

    try {
      const res = await axios.put(
        `https://adminportfolio-6swc.onrender.com/api/project/${item._id}`,
        {
          title: newTitle,
          description: newDescription,
          github: newGithub,
          live: newLive,
        }
      );

      setProject((prev) =>
        prev.map((p) => (p._id === item._id ? res.data.data : p))
      );

      alert("Project Updated Successfully");
    } catch (err) {
      console.log("Update Error:", err);
    }
  };

  // FETCH CONTACTS
  const handleViewContact = async () => {
    try {
      const res = await axios.get(
        "https://portfolio-pzgj.onrender.com/mess/getmessage"
      );

      setContacts(
        res.data.contacts ||
          res.data.messages ||
          res.data.data ||
          res.data
      );
    } catch (err) {
      console.log("Contact Fetch Error:", err);
    }
  };

  return (
    <div className="container">
      <h1 className="main-title">Admin Dashboard</h1>

      <div className="header-section">
        <button className="contact-btn" onClick={handleViewContact}>
          View Contact Messages
        </button>
      </div>

      <div className="projects-grid">
        {project.length === 0 ? (
          <h2>No Projects Found</h2>
        ) : (
          project.map((item) => (
            <div key={item._id} className="project-card">
              <img
                src={`https://adminportfolio-6swc.onrender.com/uploads/${item.image}`}
                alt={item.title}
                className="project-image"
              />

              <div className="project-content">
                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <div className="links">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>

                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    Live Demo
                  </a>
                </div>

                <div className="action-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {contacts.length > 0 && (
        <div className="contacts-section">
          <h1>Contact Messages</h1>

          <div className="contacts-grid">
            {contacts.map((contact) => (
              <div key={contact._id} className="contact-card">
                <h3>{contact.name}</h3>

                <p>
                  <strong>Email:</strong>
                </p>

                <span>{contact.email}</span>

                <p className="message-title">
                  <strong>Message:</strong>
                </p>

                <div className="message-box">
                  {contact.message}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default View;