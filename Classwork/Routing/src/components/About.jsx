import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  const param = useParams()
  console.log(param);

  const handleNavigate = () => {
    navigate("/",{replace:true, state:{"name":"Smit"}})
  }

  return (
    <div>
      <h1>About</h1>
      {/* Programatic Navigate */}
      <button onClick={handleNavigate}>Go to Home</button>
    </div>
  )
}
