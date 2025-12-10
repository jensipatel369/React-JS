import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [record, setRecord] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid)
      } else {
        navigate("/login")
      }
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
      fetchData()
    }
  }, [userId, record])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", userId)).then((res) => {
      setUserData(res.data());
    });
  };

  const fetchData = async () => {
    let allData = await getDocs(collection(db, "Todos"))
    let newData = allData.docs.map((data) => ({
      docId: data.id,
      ...data.data()
    }))
    setRecord(newData)
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <section className="min-h-screen px-6 py-10 md:px-10 lg:px-16">
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-slate-400">Welcome back</p>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/crud" className="btn-secondary hidden sm:inline-flex" >Manage Product Card</Link>
          <button onClick={handleLogout} className="btn-primary cursor-pointer">Logout</button>
        </div>
      </div>

      <div className="h-120 flex flex-col justify-center items-center gap-6">
        <div className="glass-card rounded-2xl w-130 h-55 p-6 flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-blue-500/30 border border-blue-400/30 flex items-center justify-center text-xl font-bold text-blue-100">
            {userData?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="space-y-1">
            <p className="text-sm text-slate-400">Signed in as</p>
            <h3 className="text-lg font-semibold text-white">{userData?.name || "Guest"}</h3>
            <p className="text-sm text-slate-300">{userData?.email}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-xs text-emerald-300">Status</p>
            <p className="font-semibold text-emerald-200">Online</p>
          </div>
        </div>

        <div className='flex gap-6'>
          <div className="glass-card rounded-2xl w-100 h-55 p-6 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-400">Total Product</p>
              <span className="text-xs rounded-full bg-emerald-500/20 text-emerald-200 px-3 py-1 border border-emerald-400/30">
                Synced
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white">{record?.length || 0}</h2>
            <p className="text-sm text-slate-300">All items in your workspace</p>
            <Link to="/crud" className="btn-secondary w-full justify-center">
              Open Product Card
            </Link>
          </div>

          <div className="glass-card rounded-2xl w-100 h-55 p-6 space-y-4">
            <p className="text-sm text-slate-400">Profile quick stats</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-slate-400">Age</p>
                <p className="text-lg font-semibold text-white">{userData?.age || "18"}</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs text-slate-400">Projects</p>
                <p className="text-lg font-semibold text-white">Personal</p>
              </div>
            </div>
            <p className="text-xs text-slate-400">Keep your profile up-to-date to personalize recommendations.</p>
          </div>
        </div>
      </div>
      <footer>
        <p className="text-xs text-slate-500 text-center mt-10">
          Product Manager App &copy; 2024 TaskMaster. All rights reserved.
        </p>
      </footer>
    </section>    
  )
}