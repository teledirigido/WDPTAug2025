import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CreateProject from './pages/CreateProject'
import SinglePageProject from './pages/SingleProject'
import EditProject from './pages/EditProject'

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <nav className='Navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">Create Project</Link></li>
        </ul>
      </nav>

      {/* Add Routes */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/new" element={<CreateProject />}></Route>
        <Route path="/projects/:id" element={<SinglePageProject />}></Route>
        <Route path="/projects/:id/edit" element={<EditProject />}></Route>
        {/* /project/4/edit */}
      </Routes>

    </>
  )

}

export default App
