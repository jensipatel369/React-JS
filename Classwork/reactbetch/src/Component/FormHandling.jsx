import React, { useState } from 'react'

export default function FormHandling() {
    const [formdata, setFormdata] = useState({});
    const [record, setRecord] = useState([]);

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formdata)
        setRecord([...record, formdata]);

        setFormdata({
            name: "",
            subject: "",
            age: "",
            gender: "",
            city: ""
        })
    }

    return (
        <div>
            <h1>Form Handling</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formdata.name} name='name' placeholder='Enter Your Name' onChange={(e) => { handleChange(e) }} />
                <input type="text" value={formdata.subject} name='subject' placeholder='Enter Your Subject' onChange={(e) => { handleChange(e) }} />
                <input type="text" value={formdata.age} name='age' placeholder='Enter Your Age' onChange={(e) => { handleChange(e) }} />
                <label>
                    <input type='radio' checked={formdata.gender === "male"} value={"male"} name='gender' onChange={(e) => { handleChange(e) }} />Male
                </label>
                <label>
                    <input type='radio' checked={formdata.gender === "female"} value={"female"} name='gender' onChange={(e) => { handleChange(e) }} />Female
                </label>
                <select name='city' value={formdata.city} onChange={(e) => { handleChange(e) }}>
                    <option hidden>Enter Your City</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="amreli">Amreli</option>
                    <option value="surat">Surat</option>
                </select>
                <button type='submit'>Submit</button>
            </form>

            {
                record.map((e, i) => {
                    return <ul key={i}>
                        <li>{e.name}</li>
                        <li>{e.subject}</li>
                        <li>{e.age}</li>
                        <li>{e.gender}</li>
                        <li>{e.city}</li>
                    </ul>
                })
            }
        </div>
    )
}
