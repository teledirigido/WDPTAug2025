import { useParams } from "react-router-dom";

export default function PostCommentPage() {
  
  // /posts/1/comments/10
  const { postId, commentId } = useParams();

  return (
    <>
      <h2>Comment Page {postId} Comment {commentId}</h2>
    </>
  )
}