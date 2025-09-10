import React, { useState } from 'react';

export default function Calculator() {
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");

    return (
        <div className="flex flex-col gap-10 items-center justify-center min-h-screen bg-gray-900">
            <h1 className='text-[#dfecff] text-3xl tracking-wider font-serif'>Calculator</h1>
            <div className="bg-gray-100 rounded-3xl shadow-2xl w-80 p-4">
                <div className="bg-gradient-to-b from-blue-100 to-white rounded-2xl p-4 mb-4 h-24 flex flex-col justify-end text-right">
                    <input type="text" className="w-full bg-transparent text-gray-500 text-sm outline-none text-right" value={input} onChange={(e) => setInput(e.target.value)} placeholder="0" />
                    <input type="text" className="w-full bg-transparent text-4xl font-bold outline-none text-right" value={result} onChange={(e) => setResult(e.target.value)} placeholder="0" />
                </div>
                <div className="grid grid-cols-4 gap-3">
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl col-span-2" onClick={() => { setInput(""); setResult(""); }}>AC</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setInput(input + "%")}>%</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setInput(input + "/")}>÷</button>

                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "7")}>7</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "8")}>8</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "9")}>9</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setInput(input + "*")}>×</button>

                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "4")}>4</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "5")}>5</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "6")}>6</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setInput(input + "-")}>-</button>

                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "1")}>1</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "2")}>2</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "3")}>3</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setInput(input + "+")}>+</button>

                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "0")}>0</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + "00")}>00</button>
                    <button className="bg-gray-200 font-bold py-3 rounded-xl" onClick={() => setInput(input + ".")}>.</button>
                    <button className="bg-blue-500 text-white font-bold py-3 rounded-xl" onClick={() => setResult(eval(input))}>=</button>
                </div>
            </div>
        </div>
    );
}
