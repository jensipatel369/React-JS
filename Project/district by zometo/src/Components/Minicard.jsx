import React from 'react'

export default function Minicard({ obj }) {
    return (
        <div className='w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] font-semibold border border-[#ebebeb] rounded-2xl mx-auto hover:shadow-md transition-shadow duration-300 group'>
            <div className='relative overflow-hidden'>
                <img 
                    src={obj.image} 
                    alt={obj.title} 
                    className='w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px] object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300' 
                />
            </div>
            <div className='p-2 sm:p-3 space-y-1'>
                <h1 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold line-clamp-2 leading-tight text-gray-900'>{obj.title}</h1>
                <p className='text-xs sm:text-sm text-[#545459] leading-relaxed'>{obj.disc}</p>
            </div>
        </div>
    )
}
