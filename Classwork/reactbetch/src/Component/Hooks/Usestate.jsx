import React, { useState } from 'react'

export default function Usestate() {
    const [count, setCount] = useState(0);

    // Increment function
    const increment = () => {
        setCount(count + 1);
    }

    // Decrement function
    // const decrement = () => {
    //     setCount(count - 1);
    // }

    return (
        <div>
            <h1>useState</h1>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            {/* <button onClick={decrement}>-</button> */}
            <button onClick={()=>{setCount(count-1)}}>-</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
