import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [myFirstVariable, setMyFirstVariable] = useState(100);
  const [displayImage, setDisplayImage] = useState('one');

  return (
    <>
      <h1>Hello world</h1>
      <button onClick={ () => { setMyFirstVariable(200) } }>Update</button>
      <button onClick={ () => { setMyFirstVariable(500) } }>Update 2</button>
      <button onClick={ () => { setMyFirstVariable(1000) } }>Update 3</button>
      <h2>{myFirstVariable}</h2>

      { myFirstVariable === 500 && <>
        <p onClick={ () => setMyFirstVariable(0) }>Congrats you won the prize!</p>
        </> } 
      { myFirstVariable === 200 && <>Try Again</> } 

    </>
  )
}

export default App
