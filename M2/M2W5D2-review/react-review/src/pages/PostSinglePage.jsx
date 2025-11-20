import { useParams } from "react-router-dom"

export default function PostSinglePage() {
  /*
  This page components is loaded on
  /posts/1
  /posts/2
  /posts/3
  ...
  /posts/<anything>

  So first thing is to be able to access to 
  1, 2, 3 ... <anything>

  To read and access this we can only do this with useParams

  */

  const { id } = useParams();

  return (
    <>
      <h2>Single Post Page {id}</h2>
    </>
  )
}