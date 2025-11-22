import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import SiteNav from "./components/SiteNav"
import { useContext, useState } from "react";
import { ThemeContext } from "./context/theme.context";
import './App.css';

function App() {

  const [value, setValue] = useState('My value');

  return (
    <>
      <h1>React and Context API</h1>
      <SiteNav />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={ <HomePage value={value} />}></Route>

        {/* About Page */}
        <Route path="/about" element={ <AboutPage />}></Route>
      </Routes>

    </>
  )
}

export default App
