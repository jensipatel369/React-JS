import React, { useState } from 'react'

export default function EventHandler() {
    const [URL, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [price, setPrice] = useState("");
    const [rate, setRate] = useState("");
    const [submitData, setSubmitData] = useState(null);

    const handleSubmit = () => {
        const data = { URL, title, des, price, rate };
        setSubmitData(data);
        setUrl("");
        setTitle("");
        setDes("");
        setPrice("");
        setRate("");
    }

    return (
        <div className='bg-gray-100 h-screen pb-5'>
            <h1 className='text-center py-5 text-2xl font-bold'>Product Card using Event</h1>
            <div className='rounded-md flex justify-center gap-5 flex-wrap w-175 m-auto p-5 bg-white shadow-xl'>
                <div className='flex justify-center gap-5 flex-wrap'>
                    <input className='border-1 w-50 px-2 py-1 rounded-md' value={URL} onChange={(e) => setUrl(e.target.value)} type="" placeholder='Enter URL :' />
                    <input className='border-1 w-50 px-2 py-1 rounded-md' value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Enter title : ' />
                    <input className='border-1 w-50 px-2 py-1 rounded-md' value={des} onChange={(e) => setDes(e.target.value)} type="text" placeholder='Enter description :' />
                    <input className='border-1 w-50 px-2 py-1 rounded-md' value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='Enter price :' />
                    <input className='border-1 w-50 px-2 py-1 rounded-md' value={rate} onChange={(e) => setRate(e.target.value)} type="number" placeholder='Enter rating (1-5) :' />
                </div>
                <button onClick={handleSubmit} className='cursor-pointer py-1 w-22 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition duration-200 shadow-md'>Submit</button>
            </div>

            {/* Output Design */}
            {submitData && (
                <div className="mt-10 max-w-85 mx-auto border border-gray-200 rounded-lg shadow-lg bg-white p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Submitted Product</h2>
                    <img src={submitData.URL} alt="Product" className="w-100 h-45 object-cover rounded-md border mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700">Title: {submitData.title}</h3>
                    <p className="text-gray-600 mt-1">Description: {submitData.des}</p>
                    <p className="text-lg font-bold text-green-600 mt-3">Price: ${submitData.price}</p>
                    <p className="mt-2 text-yellow-500 font-medium">Rating: {"⭐".repeat(Number(submitData.rate))}</p>
                </div>
            )}
        </div>
    )
}

