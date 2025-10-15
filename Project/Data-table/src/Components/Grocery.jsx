import React from 'react'

export default function Grocery() {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-[29px] text-[#222222] text-center font-bold pt-15 pb-8'>Grocery & Home Furnishing</h1>
            <div className='flex gap-5 mx-7.5'>
                <div>
                    <img src="1.1.png" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Big Bazzar</h1>
                </div>
                <div>
                    <img src="1.2.png" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Urban Ladder</h1>
                </div>
                <div>
                    <img src="1.3.jpg" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>@home</h1>
                </div>
                <div>
                    <img src="1.4.jpg" alt="" className='w-[352.5px]'/>
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>More</h1>
                </div>
            </div>
            <div className='bg-[#ef4e28] w-[100px] h-[5px] rounded-sm my-3'></div>
        </div>
    )
}
