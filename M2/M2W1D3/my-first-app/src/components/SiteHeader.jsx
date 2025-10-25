export default function SiteHeader({ username }) {

  console.log(username);

  return (
    <header id={`${username.id}`} className={`font-header ${username.themeColor}`}>
      <h1>This is my website at Ironhack in React</h1>
      <p>Welcome {username.fullName}</p>
      {username.email}
      <hr />
    </header>
  )
}