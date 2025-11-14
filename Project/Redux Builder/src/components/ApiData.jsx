import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, addData, deleteData, updateData } from '../features/ApiSlice.jsx'

export default function ApiData() {

  const dispatch = useDispatch()

  const [formdata, setFormdata] = useState({})
  const [editIndex, setEditIndex] = useState(null)

  const data = useSelector((state) => {
    return state.ApiKey.record
  })

  useEffect(() => {
    dispatch(fetchData());
  }, [])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex == null) {
      dispatch(addData({ ...formdata }))
    } else {
      dispatch(updateData({ editIndex, formdata }))
    }
    setFormdata({
      name: "",
      age: "",
      city: "",
      subject: "",
      gender: ""
    })
    setEditIndex(null)
  }

  const handleDelete = (id) => {
    dispatch(deleteData(id))
  }

  const handleEdit = (id) => {
    let singleData = data.find((item) => item.id == id);
    setFormdata({
      name: singleData.name,
      age: singleData.age,
      city: singleData.city,
      subject: singleData.subject,
      gender: singleData.gender
    });
    setEditIndex(id)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Redux Data Manager</h1>
          <p className="text-gray-600">Manage your data with ease</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {editIndex === null ? "Add New Record" : "Edit Record"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder='Enter your name'
                  name='name'
                  value={formdata.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder='Enter your age'
                  name='age'
                  value={formdata.age}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                  min="1"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder='Enter your city'
                  name='city'
                  value={formdata.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder='Enter your subject'
                  name='subject'
                  value={formdata.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formdata.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  required
                >
                  <option>Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className="w-full bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {editIndex === null ? "Add Data" : "Update Data"}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Records</h2>
          {data.length === 0 ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            data && data.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-4">
                {data.map((e, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br w-65 from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-5 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-semibold text-gray-800">{e.name}</h3>
                        <p className="text-gray-600">
                          <span className="font-medium">Age:</span> {e.age}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">City:</span> {e.city}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Subject:</span> {e.subject}
                        </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Gender:</span> {e.gender}
                        </p>
                      </div>
                      <div className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">
                        #{e.id}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(e.id)}
                        className="flex-1 cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(e.id)}
                        className="flex-1 cursor-pointer bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg font-medium">No data available</p>
                <p className="text-gray-400 text-sm mt-2">Add your first record using the form above</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}
