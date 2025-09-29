import React, { useState } from 'react'
import Nav from './Components/Nav'
import Menu from './Components/Menu'
import Toggle from './Components/Toggle'
import Online from './Components/Online'
import Card from './Components/Card'
import Button from './Components/Button'

export default function App() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <Toggle/>
      <Nav/>
      <Menu/>
      <Online/>
      <Button/>
    </div>
  )
}
