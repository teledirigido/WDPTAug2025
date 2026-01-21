import { useState, useEffect } from "react";
import axios from "axios";

import ProjectCard from "../components/ProjectCard";
import AddProject from "../components/AddProject";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {

    const storedToken = localStorage.getItem('authToken');
    axios
      .get(`${API_URL}/api/projects`, 
        { headers: { Authorization: `Bearer ${storedToken}`}
      })
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
