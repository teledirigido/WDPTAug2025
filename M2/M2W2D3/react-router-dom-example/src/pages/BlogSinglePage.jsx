import { Link, useParams } from "react-router-dom"

export default function BlogSinglePage() {

  const { blogId } = useParams();

  return (
    <>
    <h1>Blog Single Page {blogId}</h1>
    <hr />
    <Link to="/blog">Go Back</Link>
    </>
  )
}