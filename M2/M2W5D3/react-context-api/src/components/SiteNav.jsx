import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/theme.context";
import { UserContext } from "../context/user.context";

export default function SiteNav() {
  
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logoutUser, isLoggedIn } = useContext(UserContext);


  return (
    <nav>
      <ul>
        <li>Hi, { isLoggedIn ? user.name : 'Guest'}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#" onClick={toggleTheme}>Change Theme ({theme})</a></li>
        { isLoggedIn ? 
          <>
            <li><a href="#" onClick={logoutUser}>Logout</a></li>
          </> : <>
            <li><a href="#">Please Log-in</a></li>
          </> }
      </ul>
    </nav>
  )
}