import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebaseConfig'
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function Deskboard() {

  const [userId, setUserId] = useState(null)
  const [userData, setUserData] = useState(null)

  const navigate = useNavigate()

  const [task, setTask] = useState("")
  const [priority, setPriority] = useState("")
  const [record,setRecord] = useState([])

  
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

  const fetchData = async()=>{
    let allData = await getDocs(collection(db,"Todos"));
    let newData = allData.docs.map((data)=>({
      docId : data.id,
      ...data.data()
    }));
    console.log(newData);
  }
  
  const handleTask = async (e) => {
    let obj = { uid: userId, task, priority }

    await addDoc(collection(db,"Todos"),obj).then((data)=>{
      setRecord([...record,obj])
    })

  }
  
  return (
    <div>
      <h1>Deskboard</h1>
      <input type="text" name='task' placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} />
      <input type="text" name='priority' placeholder='Enter your priority' onChange={(e) => setPriority(e.target.value)} />
      <button onClick={handleTask}>Add Task</button><br />
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
