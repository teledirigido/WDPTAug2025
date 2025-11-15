import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function SinglePageProject() {

  // TODO
  // 1. Read the url and get the Resource ID OK
  // 2. Fetch the content with that ID
  // 2.1 Create useState variable to set the fetched response data 
  // 3. Hook the content into useEffect
  // 4. Display the content

  const { id } = useParams();
  const [project, setProject] = useState({});
  const getProject = async () => {
    const r = await fetch(`https://project-management-api.edu.ironhack.com/projects/${id}`)
    const rData = await r.json();
    setProject(rData);
  }

  useEffect( () => {
    getProject();
  }, [])

  return (
    <>
      <div className="card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>

      </div>
      <Link to="/">Back Home</Link> | <Link to={`/projects/${project.id}/edit`}>Edit "{project.title}"</Link>
    </>
  )
}