import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)
  const navigate = useNavigate()
  const [Task, setTask] = useState("")
  const [priourity, setPriourity] = useState("")
  const [record, setRecord] = useState([])
  const [editIndex, setEditIndex] = useState(null)

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

  const handleTask = async () => {
    const obj = { uid: userId, Task, priourity };
    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj).then((data) => {
        setRecord([...record, obj])
      });
    }
    else {
      await updateDoc(doc(db, "Todos", editIndex), {
        Task,
        priourity,
      });
    }
    setTask("");
    setPriourity("");
    setEditIndex(null);
    fetchData();
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  }

  const handleEdit = (id) => {
    let singleData = record.find((item) => item.docId == id);
    setTask(singleData.Task)
    setPriourity(singleData.priourity)
    setEditIndex(id);
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-blue-100 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Welcome, {userData && userData.name}!</h1>
            <p className="text-gray-600 mt-1">Manage your tasks efficiently</p>
          </div>
          <div className='flex gap-3'>
            <img src={userData && userData.photo} alt="User Avatar" className="w-12 h-12 rounded-full mt-2" />
            <button onClick={handleLogout} className="px-6 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-400 to-pink-400 hover:scale-105 transition-transform shadow-lg cursor-pointer">Log Out</button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8 border border-pink-100">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">{editIndex ? "Update Task" : "Add New Task"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Your Task' name='task' className="md:col-span-2 px-4 py-3 bg-blue-50/40 border border-blue-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300" />
            <input type="text" value={priourity} onChange={(e) => setPriourity(e.target.value)} placeholder='Priority (High/Medium/Low)' name='priority' className="px-4 py-3 bg-pink-50/40 border border-pink-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300" />
          </div>
          <button onClick={handleTask} className="mt-4 w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-400 to-pink-400 hover:scale-[1.02] duration-200 shadow-lg cursor-pointer">{editIndex == null ? "Add Task" : "Update Task"}</button>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Your Tasks ({record.length})</h2>

          {record.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tasks yet. Add your first task above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {
                record.map((e, i) => {
                  const priorityColor = e.priourity?.toLowerCase() === 'high' ? 'bg-red-100 text-red-700 border-red-300' :
                    e.priourity?.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-700 border-yellow-300' :
                      e.priourity?.toLowerCase() === 'low' ? 'bg-green-100 text-green-700 border-green-300' :
                        'bg-gray-100 text-gray-700 border-gray-300'

                  return (
                    <div key={i} className="bg-gradient-to-br from-white to-blue-50/30 border border-blue-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{e.Task}</h3>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${priorityColor}`}>{e.priourity || 'Low'}</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button onClick={() => handleEdit(e.docId)} className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-md text-sm cursor-pointer">Edit</button>
                        <button onClick={() => handleDelete(e.docId)} className="flex-1 px-4 py-2 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-md text-sm cursor-pointer">Delete</button>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          )}
        </div>
      </div>
    </div>
  )
}