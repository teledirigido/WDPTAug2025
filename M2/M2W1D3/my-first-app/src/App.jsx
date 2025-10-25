import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SiteHeader from './components/SiteHeader'
import Navigation from './components/Navigation'

function App() {

  const username = {
    id: 'user-admin',
    themeColor: 'blue',
    fullName: "Foo Bar",
    email: "miguel.garrido@ironhack.com"
  }

  return (
    <>
      <SiteHeader username={username} />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat corrupti debitis, blanditiis dolor deleniti deserunt exercitationem sequi assumenda sit placeat quibusdam. Eos sunt dolorum, nam minima repellendus earum omnis fugiat.</p>
      <Navigation />
    </>
  )
}

export default App
