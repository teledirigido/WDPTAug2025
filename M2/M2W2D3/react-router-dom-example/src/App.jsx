import { useState } from 'react'
import './index.css'
import { NavLink, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogSinglePage from './pages/BlogSinglePage'

function App() {
  
  const [hobbies, setHobbies] = useState(['farming', 'coding', 'gardening', 'hiking']);

  return (
    <>

      <nav>
        <ul>
          <li><NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/">Home</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/about">About</NavLink></li>
          <li><NavLink className={ ({isActive}) => isActive ? 'selected' : '' } to="/blog">Blog</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About hobbies={hobbies} />} />

        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/:blogId" element={<BlogSinglePage />}></Route>
      </Routes>
    </>
  )
}

export default App
