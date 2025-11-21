import React, { useState } from 'react'
import { auth, db } from '../../firebaseconfig'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {

  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate("/login")
    })
  }

  return (
    <div>
      <div className="min-h-screen bg-[#cde7f1] flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">
          <h1 className="text-3xl font-semibold text-[#0e4d65] mb-6 text-center">Register</h1>
          <form className="space-y-4">
            <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
            <button type="submit" onClick={handleRegister} className="w-full py-3 bg-[#0e4d65] text-white cursor-pointer rounded-lg font-medium transition" >Register</button>
            <p className="text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="text-[#0e4d65] cursor-pointer font-medium hover:underline">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
