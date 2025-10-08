import React, { useState } from 'react'

export default function Add() {
    const [formdata, setFormdata] = useState({})

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {

    }

    return (
        <div>
            <h1>Add</h1>

            <input type="text" name="name"  placeholder='Enter your name' onChange={handleChange} />
            <input type="text" name="age" placeholder='Enter your age' onChange={handleChange} />
            <button onClick={handleSubmit}>Add data</button>
            {/* {locationObj.state ? "Update Data" : "Add Data"} */}
        </div>
    )
}
