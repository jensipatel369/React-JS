import React, { useEffect, useState } from 'react'

export default function Cart() {
  const [record, setRecord] = useState([])

  useEffect((id) => {
    const allCart = JSON.parse(localStorage.getItem("cart")) || []
    setItems(allCart)
  }, [])
  
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}
