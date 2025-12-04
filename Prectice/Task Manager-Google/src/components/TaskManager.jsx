import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

export default function TaskManager() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const [Task, setTask] = useState("");
  const [priourity, setPriourity] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Track user authentication
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserId(user.uid);
      else navigate("/");
    });
  }, []);

  // Fetch user + tasks once when userId loads
  useEffect(() => {
    if (userId) {
      fetchUser();
      fetchData();
    }
  }, [userId]);

  // Fetch user data
  const fetchUser = async () => {
    const res = await getDoc(doc(db, "Users", userId));
    setUserData(res.data());
  };

  // Fetch tasks for this user only
  const fetchData = async () => {
    const allData = await getDocs(collection(db, "Todos"));
    const newData = allData.docs
      .map((data) => ({
        docId: data.id,
        ...data.data(),
      }))
      .filter((t) => t.uid === userId);

    setRecord(newData);
  };

  // Add or update a task
  const handleTask = async () => {
    const obj = { uid: userId, Task, priourity };

    if (editIndex == null) {
      await addDoc(collection(db, "Todos"), obj);
    } else {
      await updateDoc(doc(db, "Todos", editIndex), {
        Task,
        priourity,
      });
    }

    setTask("");
    setPriourity("");
    setEditIndex(null);
    fetchData();
  };

  // Delete task
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "Todos", id));
    fetchData();
  };

  // Edit task
  const handleEdit = (id) => {
    const singleData = record.find((item) => item.docId === id);
    setTask(singleData.Task);
    setPriourity(singleData.priourity);
    setEditIndex(id);
  };

  // Logout
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-purple-50">

      {/* Top Nav */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-7 4h8m2 4H6a2 2 0 01-2-2V6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-white font-semibold text-2xl">Dashboard</h1>
        </div>
        <button onClick={handleLogout} className="bg-white cursor-pointer text-purple-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition" >
          Logout
        </button>
      </div>

      {/* Add Task Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 m-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task name..." className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-300 outline-none" />
          <select value={priourity} onChange={(e) => setPriourity(e.target.value)} className="w-full md:w-48 px-4 py-3 border rounded-lg bg-white focus:ring-2 focus:ring-purple-300 outline-none" >
            <option value="">Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleTask} className="px-6 py-3 cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition" >
            {editIndex ? "Update Task" : "Add Task"}
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="bg-white shadow-xl rounded-2xl p-6 mt-6 m-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Tasks</h2>
          <span className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 font-medium">
            {record.length} tasks
          </span>
        </div>

        {/* Empty State */}
        {record.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
            </svg>
            <p className="text-lg font-semibold text-gray-600">No tasks found</p>
            <p className="text-gray-500 text-sm">Add your first task to get started!</p>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-4">
            {
              record.map((e, i) => {
                const priorityColor =
                  e.priourity?.toLowerCase() === "high" ? "bg-red-100 text-red-700 border-red-300" :
                    e.priourity?.toLowerCase() === "medium" ? "bg-yellow-100 text-yellow-700 border-yellow-300" :
                      e.priourity?.toLowerCase() === "low" ? "bg-green-100 text-green-700 border-green-300" :
                        "bg-gray-100 text-gray-700 border-gray-300";

                return (
                  <div key={i} className="border w-65 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold text-gray-800">{e.Task}</h3>
                    <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm border ${priorityColor}`}>
                      {e.priourity}
                    </span>
                    <div className="flex gap-2 mt-4">
                      <button onClick={() => handleEdit(e.docId)} className="flex-1 px-4 py-2 cursor-pointer bg-indigo-500 text-white rounded-lg text-sm font-medium hover:opacity-90" >
                        Edit
                      </button>
                      <button onClick={() => handleDelete(e.docId)} className="flex-1 px-4 py-2 cursor-pointer bg-red-500 text-white rounded-lg text-sm font-medium hover:opacity-90" >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}
