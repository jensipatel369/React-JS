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
      setUserId(user.uid)
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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100">

      {/* Top Navbar */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-7 4h8m2 4H6a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-white font-semibold text-2xl">Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="bg-white cursor-pointer text-purple-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition" >Logout</button>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto mt-10 p-6 pl-25 grid lg:grid-cols-2 gap-8 py-25">

        {/* User Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">User Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 cursor-pointer bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-3xl font-bold">
              {userData?.name?.charAt(0).toUpperCase()}
              {/* <img src={userData?.photo ? userData.photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfgJ0SYGF5qAueA_nbIYvUB58DCZ2KG-DkYA&s"} alt="User" className="w-12 h-12 rounded-full mt-2" /> */}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{userData?.name}</h3>
              <p className="text-gray-600">{userData?.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-green-600 text-sm">Online</span>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border rounded-xl p-4 shadow-sm">
              <p className="text-gray-500 text-sm">Age</p>
              <p className="text-xl font-semibold mt-1">{userData?.age || "—"}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white w-100 rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-semibold text-purple-800 mb-6">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:opacity-90 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-7 4h8m2 4H6a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
              <Link to="/taskmanager">Manage Tasks</Link>
            </button>
            <button className="w-full bg-gray-700 cursor-pointer text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:bg-gray-800 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-4 0-6 2-6 4v1h12v-1c0-2-2-4-6-4z" />
              </svg>
              Profile Settings
            </button>
            <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-md hover:opacity-90 transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h10m2-14H5a2 2 0 00-2 2v14l4-4h12a2 2 0 002-2V4a2 2 0 00-2-2z" />
              </svg>
              Support Center
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-600 py-6">
        © 2025 Task Manager. All rights reserved.
      </div>
    </div>
  )
}