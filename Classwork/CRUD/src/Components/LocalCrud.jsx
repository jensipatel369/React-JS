import React, { useEffect, useState } from 'react'

export default function LocalCrud() {
    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    useEffect(() => {
        const allData = JSON.parse(localStorage.getItem("record")) || []
        setRecord(allData)
    }, [])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex == null) {
            setRecord([...record, formdata])
            localStorage.setItem("record", JSON.stringify([...record, formdata]))
        } else {
            // Edit
            let singleData = record.find((e) => e.id === editIndex)
            singleData.name = formdata.name
            singleData.age = formdata.age
            singleData.city = formdata.city
            localStorage.setItem("record", JSON.stringify([...record]))
        }

        setEditIndex(null)

        setFormdata({
            name: "",
            age: "",
            city: ""
        })

    }

    // Delete Function
    const handleDelete = (id) => {
        // console.log(id);
        const newData = record.filter((e) => e.id !== id)
        setRecord(newData)
        localStorage.setItem("record", JSON.stringify(newData))
    }

    // Edit Function
    const handleEdit = (id) => {
        let singleData = record.find((e) => e.id === id)
        setFormdata({
            name: singleData.name,
            age: singleData.age,
            city: singleData.city
        })
        setEditIndex(id)
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>

            <h1>Local CRUD</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={formdata.name} placeholder='Enter your name' name='name' onChange={handleChange} />
                <input type="text" value={formdata.age} placeholder='Enter your age' name='age' onChange={handleChange} />
                <select name="city" value={formdata.city} onChange={handleChange}>
                    <option hidden>Enter your City</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="surat">Surat</option>
                    <option value="vadodara">Vadodara</option>
                    <option value="bhavnagar">Bhavnagar</option>
                    <option value="ahmedabad">Ahmedabad</option>
                </select>
                <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
            </form>

            {/* Output */}
            <table border={1} style={{ width: "40%", textAlign: "center", margin: "auto", marginTop: "20px" }}>
                <thead>
                    <tr style={{ height: "30px" }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record ? record.map((e, i) => (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.city}</td>
                                <td><button onClick={() => handleEdit(e.id)}>Edit</button></td>
                                <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                            </tr>
                        )) : <p>Loading ...</p>
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={6} style={{ height: "30px" }}>Total Records: {record.length}</th>
                    </tr>
                </tfoot>
            </table>
            {/* Output */}

        </div>
    )
}