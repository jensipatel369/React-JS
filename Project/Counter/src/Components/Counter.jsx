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

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-80">
//         {/* Title */}
//         <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Counter</h1>
        
//         {/* Display */}
//         <div className="text-center mb-6">
//           <h2 className="text-4xl font-semibold text-gray-900">{counter}</h2>
//         </div>

//         {/* Buttons Grid */}
//         <div className="grid grid-cols-3 gap-3">
//           <button
//             onClick={() => setCounter(counter + 3)}
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition"
//           >
//             +3
//           </button>

//           <button
//             onClick={() => setCounter(counter - 3)}
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
//           >
//             -3
//           </button>

//           <button
//             onClick={() => setCounter(counter * 3)}
//             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
//           >
//             ×3
//           </button>

//           <button
//             onClick={() => setCounter(counter / 3)}
//             className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg transition"
//           >
//             ÷3
//           </button>

//           <button
//             onClick={() => setCounter(0)}
//             className="col-span-3 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded-lg transition"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
