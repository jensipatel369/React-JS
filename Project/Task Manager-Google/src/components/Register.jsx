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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Top Gradient Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-10 px-6">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="mt-2 text-white/90">Join our task management platform</p>
        </div>

        {/* Form Section */}
        <div className="px-8 py-10 space-y-6">
          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input type="text" name="name" onChange={handlechange} placeholder="Enter Your Full Name" className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div>
            <label className="block font-medium mb-2">Age</label>
            <input type="number" name="age" onChange={handlechange} placeholder="Enter Your Age" className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input type="email" name="email" onChange={handlechange} placeholder="Enter Your Email" className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>
          <div>
            <label className="block font-medium mb-2">Password</label>
            <input type="password" name="password" onChange={handlechange} placeholder="Enter Your Password" className="w-full border rounded-xl px-4 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-purple-400" />
          </div>

          {/* Submit Button */}
          <button onClick={handleRegister} className="w-full cursor-pointer py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition" >
            Sign Up
          </button>

          {/* Google Sign-in */}
          <button onClick={handleSignIn} className="w-full cursor-pointer flex items-center justify-center gap-3 py-3 border rounded-xl hover:bg-gray-50 transition font-medium" >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          {/* Footer */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
