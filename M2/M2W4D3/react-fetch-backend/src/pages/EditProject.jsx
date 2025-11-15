import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function EditProject() {

  // 1. read the id from the url
  const { id } = useParams();
  const BASE_URL = 'https://project-management-api.edu.ironhack.com';
  const navigate = useNavigate();
  // 2. fetch the content & set it into a state variable
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const getProject = async () => {
    // https://project-management-api.edu.ironhack.com/projects/1
    const r = await fetch(`${BASE_URL}/projects/${id}`)
    const rData = await r.json();
    setTitle(rData.title);
    setDescription(rData.description);
  }

  // 4. add a method to update the project
  const handleSubmit = async (e) => {
    e.preventDefault();
    const r = await fetch(`${BASE_URL}/projects/${id}` , {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })
    const rData = await r.json();
    navigate(`/projects/${id}`) // navigates to the single page of the project
  }

  useEffect( () => {
    getProject();
  }, [])

  return (
    <>
      {/* // 3. populate the content on the form */}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={ (e) => { setTitle(e.target.value) } } required />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description" placeholder="Description" onChange={ (e) => { setDescription(e.target.value)} } value={description} required>
          </textarea>
        </div>
        <button>Update Project</button>
      </form>
    </>
  )
} 