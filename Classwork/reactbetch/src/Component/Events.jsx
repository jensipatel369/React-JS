import React, { useState } from 'react'

export default function Events() {
    const [name,setName] = useState("")

    const greet = () => {
        console.log("Hello", name);
    }

    return (
        <div>
            <h1>Events</h1>
            {/* <input type="text" placeholder='Enter your name' name="" id="" onChange={()=>greet("sumit")} /> */}
            <input type="text" placeholder='Enter your name :' name="" id="" onChange={(e)=>setName(e.target.value)} />

            {/* <button onClick={greet}>Click</button> */}
            {/* <button onClick={() => { greet("Rahul") }}>Click</button> */}

            <h1>{name}</h1>
        </div>
    )
}