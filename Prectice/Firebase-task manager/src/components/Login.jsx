import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export default function Login() {
  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      navigate('/deskboard')
    })
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-blue-100">
          <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Login</h1>
          <div className="space-y-5">
            <input type="text" name="email" placeholder="Enter your email" onChange={handlechange} className="w-full px-4 py-3 bg-blue-50/40 border border-blue-200 rounded-lg  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"/>
            <input type="password" name="password" placeholder="Enter your password" onChange={handlechange} className="w-full px-4 py-3 bg-pink-50/40 border border-pink-200 rounded-lg  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            <button onClick={handleLogin} className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-pink-400 cursor-pointer hover:scale-[1.02] transition-transform shadow-lg">Login</button>
          </div>
          <p className="text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link to="/" className="text-blue-500 cursor-pointer font-semibold hover:text-pink-500 transition">Register</Link>
          </p>
        </div>
      </div>

    </div>
  )
}
