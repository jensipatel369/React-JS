import React, { useState } from 'react'

export default function Calculator() {
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");
    return (
        <div>
                <h1 className="text-3xl font-bold text-center my-10">Calculator using useState</h1>
            <div className='border-2 w-105 h-140 m-auto rounded-2xl'>
                <input type="text" className="w-full h-17 p-4 border-2 rounded-2xl" value={input} onChange={(e) => setInput(e.target.value)} />
                <div className='grid grid-cols-4 gap-2 p-4'>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "7")}>7</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "8")}>8</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "9")}>9</button>
                    <button className='cursor-pointer bg-orange-400 p-4 rounded-lg' onClick={() => setInput(input + "/")}>/</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "4")}>4</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "5")}>5</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "6")}>6</button>
                    <button className='cursor-pointer bg-orange-400 p-4 rounded-lg' onClick={() => setInput(input + "*")}>*</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "1")}>1</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "2")}>2</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "3")}>3</button>
                    <button className='cursor-pointer bg-orange-400 p-4 rounded-lg' onClick={() => setInput(input + "-")}>-</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + "0")}>0</button>
                    <button className='cursor-pointer bg-gray-200 p-4 rounded-lg' onClick={() => setInput(input + ".")}>.</button>
                    <button className='cursor-pointer bg-green-400 p-4 rounded-lg' onClick={() => setResult(eval(input))}>=</button>
                    <button className='cursor-pointer bg-orange-400 p-4 rounded-lg' onClick={() => setInput(input + "+")}>+</button>
                    <button className='cursor-pointer bg-red-400 p-4 rounded-lg col-span-4' onClick={() => { setInput(""); setResult("") }}>Clear</button>
                </div>
                <h1 className='text-center text-2xl font-bold'>Result: {result}</h1>
            </div>
        </div>
    )
}
