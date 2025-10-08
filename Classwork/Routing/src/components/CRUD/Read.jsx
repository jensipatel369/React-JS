import React from 'react'
import { Link } from 'react-router-dom'

export default function Read() {
  return (
    <div>
      <h1>Read</h1>
      <Link to={"/add"}>
      <button>Add Data</button>
      </Link>
    </div>
  )
}
