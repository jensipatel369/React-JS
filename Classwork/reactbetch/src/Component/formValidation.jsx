import React, { useState } from 'react'

export default function formValidation() {
  const [pass,setPass] = useState("")
  const [err,setErr] = useState("")

  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const handleSubmit = ()=>{
    if(regex.test(pass)){
    setErr("Password is Strong")
  }else{
    setErr("Password is Weak")
  }
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <input type="text" placeholder='Enter Your Password' onChange={(e)=>{setPass()}} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
