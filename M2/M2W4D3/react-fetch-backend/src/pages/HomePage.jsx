import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function HomePage () {

  // 1- Define a useState variable
  const [projects, setProjects] = useState([]);
  const [reload, setReload] = useState(false);

  // 2- Fetch routine and hook it inside useEffect
  const getProjects = async () => {
    const r = await fetch('https://project-management-api.edu.ironhack.com/projects')
    const rData = await r.json();
    setProjects(rData)
    // console.log(rData);
  }

  const handleDeleteProject = async (e, id) => {
    e.preventDefault();
    // alert(`Deleting Project ${id}`)
    // perform a DELETE fetch
    await fetch(`https://project-management-api.edu.ironhack.com/projects/${id}`, {
      method: "DELETE",
    });
    setReload(!reload)
  }

  useEffect( () => {
    getProjects();
  }, [reload]);

  
  return (
    <>
      {/* 3- Once is fetched display  */}
      {projects.map( p => (
          <div key={p.id} className="card">
            <h2>
              <Link to={`/projects/${p.id}`}>
                {p.title}
              </Link>
            </h2>
            <p>{p.description}</p>
            <div className="op-close">
              <a href="#" onClick={ (e) => { handleDeleteProject(e, p.id) }}>+</a>
            </div>
          </div>
        )
      )}
    </>
  )
}