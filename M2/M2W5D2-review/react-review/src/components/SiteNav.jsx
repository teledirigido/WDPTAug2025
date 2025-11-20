import { Link, NavLink } from "react-router-dom";

export default function SiteNav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* conditionTrue ? do-true : do-else */}
            <NavLink
              className={({ isActive }) => isActive ? "active" : "" }
              to="/">Home</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "active" : "" }
              to="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? "active" : "" }
              to="/pokemon">Pokemon</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}