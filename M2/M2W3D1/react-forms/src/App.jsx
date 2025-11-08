import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UserItem from './components/UserItem';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import './App.css'

function App() {
  
  return (
    <>

      

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />} ></Route>
      </Routes>

    </>
  )
}

export default App
