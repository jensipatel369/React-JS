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
<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">

    {/* Top Gradient Header */}
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-10 px-6">
      <h1 className="text-3xl font-bold">Welcome Back</h1>
      <p className="mt-2 text-white/90">Sign in to your account</p>
    </div>

    {/* Form Section */}
    <div className="px-8 py-10 space-y-6">

      <div>
        <label className="block font-medium mb-2">Email</label>
        <input
          type="text"
          name="email"
          onChange={handlechange}
          placeholder="Enter Your Email"
          className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div>
        <label className="block font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          onChange={handlechange}
          placeholder="Enter Your Password"
          className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {/* Login Button */}
      <button
        onClick={handleLogin}
        className="w-full py-3 cursor-pointer rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition"
      >
        Login
      </button>

      {/* Footer */}
      <p className="text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/" className="text-blue-600 font-semibold hover:underline">
          Sign Up
        </Link>
      </p>

    </div>
  </div>
</div>

  )
}
