import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, updateData } from '../feature/TodoSlice'
import { Link } from 'react-router-dom'

export default function CRUD() {

    const dispatch = useDispatch()

    const [search, setSearch] = useState("")
    const [cat, setCat] = useState("all")
    const [sort, setSort] = useState("")

    const [formdata, setFormdata] = useState({
        title: '',
        description: '',
        price: '',
        category: ''
    })

    const [editIndex, setEditIndex] = useState(null)

    const data = useSelector((state) => state.TodoKey.record)

    // FIX: remove ID from here
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    // FIX: set ID only when adding
    const handleSubmit = (e) => {
        e.preventDefault()

        if (editIndex === null) {
            dispatch(addData({ ...formdata, id: Date.now() }))
        } else {
            dispatch(updateData({ id: editIndex, data: formdata }))
        }

        setFormdata({
            title: '',
            description: '',
            price: '',
            category: ''
        })
        setEditIndex(null)
    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    // FIX: keep ID while editing
    const handleEdit = (id) => {
        let singleData = data.find((item) => item.id === id)
        setFormdata(singleData)
        setEditIndex(id)
    }

    // Save to localStorage
    localStorage.setItem("data", JSON.stringify(data))

    // Search Filter
    const searchedData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    // Category Filter
    const filteredData = searchedData.filter((item) =>
        cat === "all" ? true : item.category === cat
    )

    // Sorting
    const sortedData = filteredData.sort((a, b) =>
        sort === "asc" ? a.price - b.price : b.price - a.price
    )

    return (
        <section className="min-h-screen px-6 py-10 md:px-10 lg:px-16 space-y-8">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <p className="text-sm text-slate-400">Organize everything</p>
                    <h1 className="text-3xl font-bold text-white">Product Management App</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <input
                        type="search"
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search tasks"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-400"
                    />

                    <select
                        onChange={(e) => setCat(e.target.value)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white"
                    >
                        <option className="bg-gray-900 cursor-pointer text-white" value="all">All</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Grocery">Grocery</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Electronics">Electronics</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Furniture">Furniture</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Clothing">Clothing</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Other">Other</option>
                    </select>

                    <select
                        onChange={(e) => setSort(e.target.value)}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white"
                    >
                        <option className="bg-gray-900 cursor-pointer text-white" hidden>Select Sorting</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="asc">Low to High</option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="desc">High to Low</option>
                    </select>

                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white">
                        <Link to="/deskboard" className="text-blue-400">Back to Dashboard</Link>
                    </div>
                </div>
            </div>

            <div className="glass-card rounded-2xl p-6">

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        type="text"
                        value={formdata.title}
                        name="title"
                        onChange={handleChange}
                        placeholder="Title"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                    />

                    <input
                        type="text"
                        value={formdata.description}
                        name="description"
                        onChange={handleChange}
                        placeholder="Description"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white md:col-span-2"
                    />

                    <input
                        type="number"
                        value={formdata.price}
                        name="price"
                        onChange={handleChange}
                        placeholder="Price"
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                    />

                    <select
                        name="category"
                        value={formdata.category}
                        onChange={handleChange}
                        className="rounded-xl border border-white/10 bg-white/10 text-white px-4 py-3"
                    >
                        <option className="bg-gray-800 cursor-pointer text-white" hidden>
                            Select Category
                        </option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Grocery">
                            Grocery
                        </option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Electronics">
                            Electronics
                        </option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Furniture">
                            Furniture
                        </option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Clothing">
                            Clothing
                        </option>
                        <option className="bg-gray-900 cursor-pointer text-white" value="Other">
                            Other
                        </option>
                    </select>

                    <div className="flex gap-3 md:col-span-2">
                        <button type="submit" className="btn-primary cursor-pointer">
                            {editIndex === null ? "Add Task" : "Update Task"}
                        </button>

                        {editIndex !== null && (
                            <button
                                type="button"
                                className="btn-secondary cursor-pointer"
                                onClick={() => {
                                    setFormdata({ title: '', description: '', price: '', category: '' })
                                    setEditIndex(null)
                                }}
                            >
                                Cancel
                            </button>
                        )}
                    </div>

                </form>
            </div>

            <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">Your tasks</h2>
                    <p className="text-sm text-slate-400">{sortedData.length} items</p>
                </div>

                {sortedData.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-white/20 p-6 text-center text-slate-300">
                        No records yet. Add a task to get started.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sortedData.map((e) => (
                            <div key={e.id} className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">

                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-slate-400">ID : {e.id}</p>
                                    <span className="text-[10px] uppercase tracking-wide bg-blue-500/20 text-blue-200 px-2 py-1 rounded-full">
                                        {e.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-semibold text-white">{e.title}</h3>
                                <p className="text-sm text-slate-300 line-clamp-2">{e.description}</p>
                                <p className="text-sm font-semibold text-emerald-300">${e.price}</p>

                                <div className="flex gap-2 pt-2">
                                    <button
                                        className="btn-secondary flex-1 cursor-pointer"
                                        onClick={() => handleEdit(e.id)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="btn-primary flex-1 cursor-pointer bg-rose-500 hover:bg-rose-600"
                                        onClick={() => handleDelete(e.id)}
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}
