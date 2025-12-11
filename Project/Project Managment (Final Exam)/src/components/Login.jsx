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
      navigate('/deshboard')
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="glass-card w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl">
        <div className="p-10 flex flex-col justify-between bg-gradient-to-br from-emerald-500/30 via-blue-600/30 to-indigo-700/25">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-emerald-50">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              Welcome back
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Sign in to keep your tasks in sync
            </h1>
            <p className="text-emerald-50/90">
              Organize projects, track deadlines, and stay productive with a clean, friendly experience.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs text-emerald-50/90">
              <div className="rounded-xl bg-white/10 px-3 py-3 border border-white/10">
                <p className="font-semibold">Fast access</p>
                <p className="text-emerald-50/70">Secure Firebase auth</p>
              </div>
              <div className="rounded-xl bg-white/10 px-3 py-3 border border-white/10">
                <p className="font-semibold">All-in-one</p>
                <p className="text-emerald-50/70">Tasks, filters, stats</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-emerald-50/80 mt-8">
            Need an account? Create one in seconds and start organizing.
          </p>
        </div>

        <div className="p-10 space-y-8">
          <div className="space-y-2">
            <p className="text-sm text-slate-300">Welcome back</p>
            <h2 className="text-2xl font-semibold text-white">Log in</h2>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-slate-200">Email</label>
              <input
                type="text"
                name="email"
                onChange={handlechange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-slate-200">Password</label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
              />
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={handleLogin} className="btn-primary cursor-pointer w-full">
              Login
            </button>
          </div>

          <div className='flex justify-center'>
            <p className="text-sm text-slate-300">
              Don't have an account?{" "}
              <Link className="text-blue-400 hover:text-blue-300 font-semibold" to="/">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
