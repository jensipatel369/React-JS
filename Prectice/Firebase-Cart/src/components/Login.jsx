import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseconfig'

export default function Login() {
  const [formdata, setFormdata] = useState({ email: '', password: '' })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, formdata.email, formdata.password)
      navigate('/deshboard')
    } catch (error) {
      console.error('Unable to sign in', error)
    }
  }

  return (
    <div>
      {/* <h1>Login</h1>
      <form>
        <input type="text" name='email' placeholder='Enter your email' onChange={handleChange} />
        <input type="text" name='password' placeholder='Enter your password' onChange={handleChange} /><br /><br />
        <button onClick={handleLogin}>Login</button><br /><br />
        <Link to="/register">Register</Link>
      </form> */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-md">

          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Login
          </h1>

          <form className="space-y-4" onSubmit={handleLogin}>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white cursor-pointer rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/" className="text-blue-600 cursor-pointer font-medium hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  )
}
