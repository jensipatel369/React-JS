import React, { useState } from 'react'

export default function Form() {
  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formdata)
    setRecord([...record, formdata])

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
      <form onSubmit={handleSubmit}>
        <input name='name' value={formdata.name} type="text" placeholder='Enter Your Name' onChange={(e) => { handleChange(e) }} />
        <input name='subject' value={formdata.subject} type="text" placeholder='Enter Your Subject' onChange={(e) => { handleChange(e) }} />
        <input name='age' value={formdata.age} type="text" placeholder='Enter Your Age' onChange={(e) => { handleChange(e) }} />
        <input name='gender' value={"male"} checked={formdata.gender=="male"&&true} onChange={(e) => { handleChange(e) }} type="radio" />Male
        <input name='gender' value={"female"} checked={formdata.gender=="female"&&true} onChange={(e) => { handleChange(e) }} type="radio" />Female
        <select name="city" onChange={(e) => { handleChange(e) }} value={formdata.city}>
          <option hidden>Enter Your City</option>
          <option value="rajkot">Rajkot</option>
          <option value="surat">Suart</option>
          <option value="amreli">Amreli</option>
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






// Counter :-

// import React, { useState } from 'react'

// export default function Form() {
//   const [count,setCount] = useState(0)

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+3)}>+3</button>
//       <button onClick={()=>setCount(count-3)}>-3</button>
//       <button onClick={()=>setCount(count*3)}>*3</button>
//       <button onClick={()=>setCount(count/3)}>/3</button>
//     </div>
//   )
// }
