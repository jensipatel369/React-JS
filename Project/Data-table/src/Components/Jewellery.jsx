import React from 'react'

export default function Jewellery() {
    return (
        <div className='flex flex-col items-center' >
            <h1 className='text-[29px] text-[#222222] text-center font-bold pt-15 pb-8'>Jewellery Brands</h1>
            <div className='flex gap-5 mx-7.5'>
                <div>
                    <img src="2.1.png" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Kalyan | Get 20% Cashback</h1>
                </div>
                <div>
                    <img src="2.2.jpg" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Surat Diamond | Up to ₹2500 C...</h1>
                </div>
                <div>
                    <img src="2.3.jpg" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Jewelfina</h1>
                </div>
                <div>
                    <img src="2.4.jpg" alt="" className='w-[352.5px]' />
                    <h1 className='text-[22px] text-[#222222] font-bold text-center my-[20px]'>Tanishq</h1>
                </div>
            </div>
            <div className='bg-[#ef4e28] w-[100px] h-[5px] rounded-sm my-3 mb-4'></div>
        </div >
    )
}
