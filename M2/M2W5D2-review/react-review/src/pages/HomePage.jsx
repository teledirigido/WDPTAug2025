import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      Home Page content is here 😊
      <ul>
        <li>
          {/* 
          Will take us to:
          http://localhost:5173/posts/1
           */}
          <Link to="/posts/1">Post ID 1</Link>
        </li>
        <li>
          <Link to="/posts/2">Post ID 2</Link>
        </li>
        <li>
          <Link to="/posts/3">Post ID 3</Link>
        </li>
      </ul>
    </>
  )
}