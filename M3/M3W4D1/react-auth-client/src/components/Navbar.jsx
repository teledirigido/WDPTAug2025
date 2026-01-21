import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { isLoggedIn, logoutUser, user } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      { isLoggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          Hello { user.name }
          <button onClick={logoutUser}>Log-out</button>
        </>
      ) }

      { !isLoggedIn && (
        <>
          <Link to="/signup"><button>Signup</button></Link>
          <Link to="/login"><button>Log-in</button></Link>
        </>
      ) }

    </nav>
  );
}

export default Navbar;
