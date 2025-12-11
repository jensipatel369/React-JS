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
      navigate('/deshboard')
    })
  }

  return (
    <section className="max-h-screen flex items-center justify-center px-4 py-10">
      <div className="glass-card w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl">
        <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-blue-600/40 via-indigo-600/30 to-purple-700/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-50">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              New here? Start now
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Create your account
            </h1>
            <p className="text-blue-100">
              Join our simple, friendly workspace to plan, prioritize, and track tasks with ease.
            </p>
            <ul className="text-sm text-blue-50/90 space-y-2">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Real-time sync across your devices
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Collaborative to-dos and reminders
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-300" />
                Secure authentication powered by Firebase
              </li>
            </ul>
          </div>
          <p className="text-xs text-blue-100/80 mt-8">
            By continuing, you agree to our Terms and acknowledge our Privacy Policy.
          </p>
        </div>

        <div className="p-10 space-y-8">
          <div className="space-y-2">
            <p className="text-sm text-slate-300">Let’s get you set up</p>
            <h2 className="text-2xl font-semibold text-white">Sign up</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-200">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handlechange}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-200">Age</label>
              <input
                type="number"
                name="age"
                onChange={handlechange}
                placeholder="Enter your age"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-200">Email</label>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-200">Password</label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                placeholder="Create a strong password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/40"
              />
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={handleRegister} className="btn-primary cursor-pointer w-full">
              Create account
            </button>

            <button
              onClick={handleSignIn}
              className="btn-secondary cursor-pointer w-full gap-3 bg-white/5"
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="h-5 w-5"
              />
              Continue with Google
            </button>
          </div>

          <div className='flex justify-center'>
            <p className="text-sm text-slate-300">
              Already have an account?{" "}
              <Link className="text-blue-400 hover:text-blue-300 font-semibold" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}