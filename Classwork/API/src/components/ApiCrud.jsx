import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function ApiCrud() {

    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])

    useEffect(() => {
        fetchRecord();
    }, [])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/users", formdata).then(res => {
            setFormdata({
                name: "",
                age: "",
                city: ""
            })
        })
    }

    const fetchRecord = async () => {
        await axios.get("http://localhost:5000/users").then(res => {
            setRecord(res.data)
        })
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <h1 className="text-3xl font-bold text-blue-600 mb-8">API CRUD</h1>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4" >
                <input type="text" placeholder="Name" name="name" value={formdata.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Age" name="age" value={formdata.age} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="City" name="city" value={formdata.city} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200" >Add Data</button>
            </form>

            <div className="mt-10 w-full text-center flex justify-center gap-5">
                {
                    record.map((e, i) => (
                        <ul key={i} className="bg-white w-50 shadow-sm rounded-lg p-4 mb-3 border border-gray-100 hover:shadow-md transition" >
                            <li className="text-lg font-semibold text-gray-800">{e.name}</li>
                            <li className="text-gray-600">Age: {e.age}</li>
                            <li className="text-gray-600">City: {e.city}</li>
                        </ul>
                    ))
                }
            </div>
        </div>

    )
}


