import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function CreateProject() {
  
  // 1- Add value on input, textarea, state variables - OK
  // 2- fetch a post
  // 3- redirect to home

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const createProject = async () => {
    const r = await fetch('https://project-management-api.edu.ironhack.com/projects' , {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    })
    const rData = await r.json();
    navigate('/');
  }
  const handleSubmit = e => {
    e.preventDefault(); // prevents the page from loading
    createProject();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Title" value={title} onChange={ (e) => { setTitle(e.target.value) } } required />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" id="description" placeholder="Description" onChange={ (e) => { setDescription(e.target.value)} } required>
            {description}
          </textarea>
        </div>
        <button>Create Project</button>
      </form>
    </>
  )
}