import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
      id: Date.now(),
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex == null) {
      dispatch(addData(formdata))
    } else {
      dispatch(updateData({ id: editIndex, data: formdata }))
    }
    setFormdata({
      name: '',
      age: ''
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
      age: singleData.age 
    });
    setEditIndex(id)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' name='name' onChange={handleChange} />
        <input type="text" placeholder='Enter your age' name='age' onChange={handleChange} />
        <button type='submit'>{editIndex === null ? "Add Data" : "Update Data"}</button>
      </form>
      {
        data.map((e,i)=>{
          return <ul key={i}>
            <li>{e.name} - {e.age}
              <button onClick={() => handleEdit(e.id)}>Edit</button>
              <button onClick={() => handleDelete(e.id)}>Delete</button>
            </li>
          </ul>
        })
      }
    </div>
  )
}
