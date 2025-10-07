import React, { useState } from 'react'

export default function New() {
    const [formdata, setFormdata] = useState({})
    const [record, setRecord] = useState([])

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setRecord([...record,formdata])
        localStorage.setItem("record",JSON.stringify([...record,formdata]))

        setFormdata({
            name : "",
            age : "",
            subject : ""
        })
    }

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Local Storage CRUD</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formdata.name} onChange={handleChange} placeholder='Enter your name' />
                <input type="text" name="age" value={formdata.age} onChange={handleChange} placeholder='Enter your age' />
                <input type="text" name="subject" value={formdata.subject} onChange={handleChange} placeholder='Enter your subject' />
                <button type='submit'>add</button>
            </form>

            {/* Output */}
            <table border={1} style={{ width: "40%", textAlign: "center", margin: "auto", marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Subject</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((e, i) => {
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.subject}</td>
                                {/* <td><button onClick={()=>handleEdit(e.id)}>Edit</button></td>
                                <td><button onClick={()=>handleDelete(e.id)}>Delete</button></td> */}
                            </tr>
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan={6}>Total : {record.length}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
