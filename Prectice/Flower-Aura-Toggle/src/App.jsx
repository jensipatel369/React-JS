import React, { useState } from 'react'
import Nav from './Components/Nav'
import Menu from './Components/Menu'
import Toggle from './Components/Toggle'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <Toggle/>
      <Nav/>
      <Menu/>
    </div>
  )
}
