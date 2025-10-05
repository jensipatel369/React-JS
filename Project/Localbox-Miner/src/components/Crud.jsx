import React, { useEffect, useState } from 'react'

export default function Crud() {
    const [data, setData] = useState({
        image: "",
        title: "",
        description: "",
        price: "",
        rate: ""
    })
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        const allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    }, [])

    const handleChange = (e) => {
        setData({
            ...data,
            id: editIndex ?? Date.now(),
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (editIndex == null) {
            const newData = [...record, data]
            setRecord(newData)
            localStorage.setItem("record", JSON.stringify(newData))
        } else {
            const updated = record.map((item) =>
                item.id === editIndex ? { ...data, id: editIndex } : item
            )
            setRecord(updated)
            localStorage.setItem("record", JSON.stringify(updated))
        }

        setEditIndex(null)
        setData({ image: "", title: "", description: "", price: "", rate: "" })
    }

    const handleDelete = (id) => {
        const newData = record.filter((e) => e.id !== id)
        setRecord(newData)
        localStorage.setItem("record", JSON.stringify(newData))
    }

    const handleEdit = (id) => {
        let singleData = record.find((e) => e.id === id)
        setData(singleData)
        setEditIndex(id)
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Image Card CRUD</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-170 flex flex-wrap justify-center gap-3" >
                <input type="text" value={data.image} name="image" placeholder="Image URL" onChange={handleChange} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" value={data.title} name="title" placeholder="Title" onChange={handleChange} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" value={data.description} name="description" placeholder="Description" onChange={handleChange} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" value={data.price} name="price" placeholder="Price" onChange={handleChange} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" value={data.rate} name="rate" placeholder="Rate" onChange={handleChange} className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type="submit" className="bg-blue-500 cursor-pointer text-white rounded px-4 py-2 hover:bg-blue-600 transition-colors" >{editIndex == null ? "Add" : "Update"}</button>
            </form>

            {/* Output Cards */}
            <div className="flex justify-center flex-wrap gap-5 mt-7 w-[85%]">
                {record.map((e) => (
                    <div key={e.id} className="bg-white p-4 rounded-lg shadow-md w-75 flex flex-col">
                        <img src={e.image} alt={e.title} className="w-full h-40 object-cover rounded-md mb-3" />
                        <h3 className="text-lg font-semibold mb-1">{e.title}</h3>
                        <p className="text-gray-600 mb-2">{e.description}</p>
                        <p className="text-gray-800 font-medium mb-1"><span className="font-semibold">Price:</span> ${e.price}</p>
                        <p className="text-gray-800 font-medium mb-3"><span className="font-semibold">Rate:</span> {e.rate}</p>
                        <div className="flex justify-between mt-auto">
                            <button onClick={() => handleEdit(e.id)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors" >Edit</button>
                            <button onClick={() => handleDelete(e.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors" >Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="mt-8 text-center font-semibold text-gray-700">Total Records: {record.length}</h3>
        </div>
    )
}
