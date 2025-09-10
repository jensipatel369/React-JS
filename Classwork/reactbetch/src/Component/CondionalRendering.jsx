// import React from 'react'

// export default function CondionalRendering() {
//     const choice = false
//     return (
//         <div>
//             <h1>Condional Rendering</h1>
//             {choice == true ? <h1>Hello</h1> : <h1>Bye</h1>}
//         </div>
//     );
// }

import React, { useState } from 'react'

export default function CondionalRendering() {
    const [choice,setChoice] = useState(false);
  return (
    // <div style={{backgroundColor : choice ? "skyblue" : "plum"}} className='flex flex-col items-center'>
    <div style={{backgroundColor : choice && "skyblue"}} className='flex flex-col items-center'>
        <h1 className='text-2xl font-bold py-5'>Condional Rendering</h1>
        <button onClick={()=>setChoice(!choice)} className='bg-black cursor-pointer text-white px-5 py-1 my-2'>Click</button>      
        {choice && <h1 className='text-[18px]'>Hello</h1>}
    </div>
  )
}
