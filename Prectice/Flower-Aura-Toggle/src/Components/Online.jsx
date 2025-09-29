import React from 'react'

export default function Online() {
  return (
    <div className='bg-[#f4f7f8] h-32 flex items-end justify-between px-18.5 py-10'>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[22px] text-[#1C2120] font-semibold'>Online Cake Delivery In Rajkot</h1>
            <div className='flex gap-1 text-[11px]'>
                <div className='flex items-center'>
                    <a href="#" className='underline text-[#197887]'>Home</a>
                    <svg className='mt-0.5' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"><path fill="none" stroke="#1C2120" d="M6 4.5L9.5 8L6 11.5" stroke-width="1"/></svg>
                </div>
                <div className='flex items-center'>
                    <a href="#" className='underline text-[#197887]'>Cakes</a>
                    <svg className='mt-0.5' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16"><path fill="none" stroke="#1C2120" d="M6 4.5L9.5 8L6 11.5" stroke-width="1"/></svg>
                </div>
                <p className='text-[#494D4D]'>Cake Delivery in Rajkot</p>
            </div>
        </div>
        <p className='text-[11px] text-[#494D4D]'>Item 30 of 244 Total | Ranging From ₹495 to ₹1549</p>      
    </div>
  )
}
