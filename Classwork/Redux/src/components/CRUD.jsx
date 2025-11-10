import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData } from '../feature/TodoSlice'

export default function CRUD() {

    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({})
    // const [record, setRecord] = useState([])

    const data = useSelector((state) => {
        return state.TodoKey.record
    })

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            id: Date.now(),
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addData(formdata))

        setFormdata({
            name: '',
            age: ''
        })
    }

    const handleDelete = (id) => {
        dispatch(deleteData(id))
    }

    return (
        <div>
            <h1>CRUD</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formdata.name} name='name' placeholder='Enter your name' onChange={handleChange} />
                <input type="text" value={formdata.age} name='age' placeholder='Enter your age' onChange={handleChange} />
                <button type='submit'>Add Data</button>
            </form>

            {
                data.map((e, i) => {
                    return (
                        <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.name}</li>
                            <li>{e.age}</li>
                            <li><button onClick={()=>handleDelete(e.id)}>Delete</button></li>
                            <li><button>Edit</button></li>
                            <hr />
                        </ul>
                    )
                })
            }
        </div>
    )
}
