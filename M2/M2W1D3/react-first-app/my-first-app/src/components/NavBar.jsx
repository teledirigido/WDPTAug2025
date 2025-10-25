export default function NavBar({ student }) {
  return (
    <>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact us</li>
        <li>Logout {student.firstName}</li>
      </ul>
    </>
  )
}