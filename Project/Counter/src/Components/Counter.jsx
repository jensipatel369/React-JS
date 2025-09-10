import React, { useState } from 'react'

export default function Counter() {
    const [Counter, setCounter] = useState(0);
  return (
    <div className='bg-gray-100 h-screen flex items-center'>
      <div className='bg-white shadow-lg rounded-xl p-6 w-70 m-auto text-center'>
        <h1 className='text-2xl font-bold'>Counter</h1>
        <h1 className='text-xl my-2'>{Counter}</h1>
        <button className='px-2 py-1.5 w-25 mt-3 cursor-pointer duration-300 rounded-lg bg-green-300 hover:bg-green-400' onClick={() => setCounter(Counter + 3)}>+3</button>
        <button className='px-2 py-1.5 w-25 mt-3 cursor-pointer duration-300 rounded-lg ml-3 bg-pink-300 hover:bg-pink-400' onClick={() => setCounter(Counter - 3)}>-3</button>
        <button className='px-2 py-1.5 w-25 mt-3 cursor-pointer duration-300 rounded-lg bg-red-300 hover:bg-red-300' onClick={() => setCounter(Counter * 3)}>*3</button>
        <button className='px-2 py-1.5 w-25 mt-3 cursor-pointer duration-300 rounded-lg ml-3 bg-blue-300 hover:bg-blue-400' onClick={() => setCounter(Counter / 3)}>/3</button>
        <button className='px-2 py-1.5 w-53 mt-3 cursor-pointer duration-300 rounded-lg bg-yellow-300 hover:bg-yellow-300' onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  )
}
