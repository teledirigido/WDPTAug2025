import { useContext } from "react"
import { ThemeContext } from "../context/theme.context"
import { UserContext } from "../context/user.context";

export default function HomePage({ value }) {

  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);

  return (
    <>
      <section className={`theme-${theme}`}>
        <h2>🏡 Home Page</h2> 
        <p>
          {value} - { theme === 'dark' ? '🌕' : '🌞' }
        </p>
        <hr />
        <p>{user.email}</p>
      </section>
    </>
  )
}