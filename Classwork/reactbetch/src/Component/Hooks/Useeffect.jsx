import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    // Mounting 
    // useEffect(() => {
    //     console.log("Hello");
    // }, ["dependency array"]);

    // Updating
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     console.log("Hello");
    // }, [count]);

    // Unmounting
    // useEffect(() => {
    //     return // Return Statement get executed on unmounting
    // },[])

    return (
        <div>
            <h1>useEffect</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
