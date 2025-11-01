import { NavLink } from "react-router-dom";

export default function Blog() {
  return (
    <>
    Blog Page
    <ul>
      <li>
        <NavLink to="/blog/100">Blog Article</NavLink>
      </li>
      <li>
        <NavLink to="/blog/150">Another Blog Article</NavLink>
      </li>
      <li>
        <NavLink to="/blog/my-first-post">My First Post</NavLink>
      </li>
    </ul>
    </>
  )
}