import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  const [record, setRecord] = useState([])

  useEffect(() => {
    const allCart = JSON.parse(localStorage.getItem("cart")) || []
    setRecord(allCart)
  }, [])

  const removeBtn = (id) => {
    const newData = record.filter((e) => e.id !== id)
    setRecord(newData)
    localStorage.setItem("cart", JSON.stringify(newData))
  }

  return (
    <>
      <h1 className='text-center py-3 mt-12 text-2xl font-semibold'>Your Cart</h1>
      <div className='flex justify-center gap-5 flex-wrap'>
        {
          record.length > 0 ?
            record.map((e, i) => {
              return <div className='w-[298px] border-1 rounded-2xl border-[#c2c2c2] relative' key={i}>
                <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-2.5 top-2.5' width="22" height="22" viewBox="0 0 14 14"><g fill="#fff"><path fill="#d7e0ff" d="M7 3.183C3.98-.522.792 2.111.75 4.949C.75 9.173 5.805 12.64 7 12.64s6.25-3.468 6.25-7.692C13.208 2.11 10.02-.522 7 3.183" /><path stroke="#197889" stroke-linecap="round" stroke-linejoin="round" d="M7 3.183C3.98-.522.792 2.111.75 4.95c0 4.224 5.055 7.69 6.25 7.69s6.25-3.467 6.25-7.692C13.208 2.11 10.02-.522 7 3.183" stroke-width="1" /></g></svg>
                <img src="veg.png" alt="" className='w-4 absolute left-3 top-69 bg-white p-[1px]' />
                <img src={e.img} alt="" className='h-[304px] rounded-t-2xl' />
                <div className='p-[16px] flex flex-col gap-[8px]'>
                  <h1 className='text-[#5c605f] text-[14px] font-semibold'>{e.title}</h1>
                  <h1 className='text-[#1C2120] text-[16px] font-semibold'>₹ {e.price}</h1>
                  <div className='flex items-center gap-2'>
                    <div className='bg-[#4caf50] rounded-md py-[1px] w-12 px-1 text-[12px] text-white flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" /></svg>
                      {e.rate}
                    </div>
                    <div className='bg-[#CCCCCC] w-1 h-1 rounded-full'></div>
                    <h1 className='text-[#197889] text-[14px] font-semibold'>{e.reviews}</h1>
                  </div>
                  <div className='flex justify-between'>
                    <h1 className='text-[#494D4D] font-semibold text-[12px]'>Earliest Delivery : <span className='text-[#197889]'>{e.time}</span></h1>
                    <button onClick={() => removeBtn(e.id)} className='city text-[#197889] text-[12px] cursor-pointer flex justify-center items-center p-1 rounded-sm'>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            }) :
            <div className='flex justify-center items-center text-2xl'>
              <img src="empty.gif" alt="" className='w-50 mt-8' />
            </div>
        }
      </div>
      <div className='w-full my-8 flex justify-center'>
        <Link to={"/deshboard"}>
          <button className='city px-4 py-2 border-1 text-[#197889] font-semibold text-md border-[#197889] rounded-md cursor-pointer'>Go to Shopping</button>
        </Link>
      </div>
    </>
  )
}
