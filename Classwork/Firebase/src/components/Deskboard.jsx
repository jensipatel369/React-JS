import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Deskboard() {

  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserId(user.uid)
    })
  }, [])

  useEffect(() => {
    if (userId) {
      fetchUser()
    }
  }, [userId])

  const fetchUser = async () => {
    await getDoc(doc(db, "Users", userId)).then((res) => {
      setUserData(res.data())
    })
  }

  const handleLogout = async () => {
    await auth.signOut()
    navigate("/")
  }

  return (
    <div>
      {/* <h1>Deskboard</h1>
      <ul>
        <li>{userData && userData.name}</li>
        <li>{userData && userData.email}</li>
        <button onClick={handleLogout}>Log Out</button>
      </ul> */}
      <div className="min-h-screen bg-pink-100 flex flex-col justify-center items-center p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Deskboard</h1>
        <div className='flex flex-wrap justify-center gap-6 mx-50'>
          <div className="bg-white shadow-lg rounded-2xl p-6 w-85 border border-blue-200">
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-pink-50 border border-pink-200">
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-semibold text-pink-700">{userData && userData.name}</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-blue-700">{userData && userData.email}</p>
              </div>
            </div>
            <button onClick={handleLogout} className="mt-6 w-full bg-gradient-to-r cursor-pointer from-pink-400 to-blue-400 text-white py-2.5 rounded-xl font-semibold shadow hover:opacity-90 transition" >Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}
