import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const student = {
    firstName: 'Ana',
    lastName: 'Martinez'
  };

  const sayHi = () => {
    alert('Hello from React');
  }

  return (
    <>
      <h1>Hello {student.firstName}</h1>
      <NavBar student={student} />
      <button onClick={sayHi}>Greet me</button>
    </>
  )
}

export default App
