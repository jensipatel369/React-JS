import React from 'react'

export default function Card({obj}) {
    return (
        <div className='w-full min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[350px] xl:min-w-[380px] max-w-[400px] text-xs font-semibold border border-[#ebebeb] rounded-2xl mx-auto hover:shadow-lg transition-shadow duration-300'>
            <div className='relative overflow-hidden'>
                <img 
                    src={obj.image} 
                    alt={obj.title} 
                    className='w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] object-cover rounded-t-2xl hover:scale-105 transition-transform duration-300' 
                />
            </div>
            <div className='p-3 sm:p-4 space-y-2'>
                <h2 className='text-[#8B8123] text-xs sm:text-sm font-medium'>{obj.time}</h2>
                <h1 className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold line-clamp-2 leading-tight text-gray-900'>{obj.title}</h1>
                <p className='text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed'>{obj.add}</p>
                <div className='flex items-center justify-between pt-2'>
                    <h1 className='text-[#545459] text-sm sm:text-base font-semibold'>{obj.price}</h1>
                    <button className='bg-[#6444e4] text-white text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-[#5a3dd1] transition-colors duration-200'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}
