export default function UserItem({ user, color, onDelete }) {

  return (
    <>
      <p>
        {user.id} | {user.userName} - {user.email} - {color} <button onClick={ () => { onDelete(user.id) }}>Delete</button>
      </p>
    </>
  )
}

