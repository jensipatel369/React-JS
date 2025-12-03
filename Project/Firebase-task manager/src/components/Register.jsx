import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, db, provider } from '../../firebaseConfig'
import { doc, setDoc } from 'firebase/firestore'

export default function Register() {

  const [formdata, setFormdata] = useState({})
  const navigate = useNavigate()

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, formdata.email, formdata.password).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), formdata)
      navigate('/login')
    })
  }

  // Google Sign In
  const handleSignIn = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      setDoc(doc(db, "Users", res.user.uid), {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
      })
      navigate('/deskboard')
    })
  }

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border border-pink-100">
          <h1 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">Create Account</h1>
          <div className="space-y-5">
            <input type="text" name="name" placeholder="Enter your name" onChange={handlechange} className="w-full px-4 py-3 bg-pink-50/40 border border-pink-200 rounded-lg  text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            <input type="text" name="email" placeholder="Enter your email" onChange={handlechange} className="w-full px-4 py-3 bg-blue-50/40 border border-blue-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="password" name="password" placeholder="Enter your password" onChange={handlechange} className="w-full px-4 py-3 bg-pink-50/40 border border-pink-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300" />
            <button onClick={handleRegister} className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r cursor-pointer from-pink-400 to-blue-400 hover:scale-[1.02] transition-transform shadow-lg"> Register </button>
          </div>
          <button onClick={handleSignIn} className="w-full mt-6 flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg shadow-sm bg-whitehover:bg-gray-50 transition cursor-pointer">
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            <span className="text-gray-700 font-medium">Sign in with Google</span>
          </button>
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-500 cursor-pointer font-semibold hover:text-blue-500 transition">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
