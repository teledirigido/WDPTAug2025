export default function About({ hobbies }) {
  return (
    <>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, totam!</p>
      <ul>
        {hobbies.map(c => {
          return (
            <li>{c}</li>
          )
        })}
      </ul>
    </>
  )
}