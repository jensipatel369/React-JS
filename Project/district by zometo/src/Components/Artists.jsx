import React from 'react'

export default function Artists() {
    let arr5 = [
        {
            image : "19.jpg",
            name : "Purva Mantri"
        },
        {
            image : "20.jpg",
            name : "Denzel Curry"
        },
        {
            image : "21.jpg",
            name : "Wild Wild Women"
        },
        {
            image : "22.png",
            name : "Don Toliver"
        },
        {
            image : "23.jpg",
            name : "Umesh Barot"
        },
        {
            image : "24.jpg",
            name : "Raj Gadhvi"
        },
        {
            image : "25.jpg",
            name : "Euphoria"
        },
        {
            image : "26.jpg",
            name : "Raman Negi"
        },
        {
            image : "27.png",
            name : "Chow Lee"
        },
        {
            image : "28.png",
            name : "Karan Aujla"
        },
    ]

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-8 sm:pb-12 md:pb-16 lg:pb-20'>
            <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8 md:pb-10 text-gray-900'>Artists in your District</h1>
            <div className='overflow-x-auto pb-4'>
                <div className='w-max'>
                    <div className='flex gap-4 sm:gap-6 md:gap-8'>
                        {
                            arr5.map((e,i)=>{
                                return <div key={i} className='text-center text-sm sm:text-base md:text-lg lg:text-xl font-semibold min-w-[120px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] hover:scale-105 transition-transform duration-300 cursor-pointer'>
                                    <div className='relative overflow-hidden rounded-full mb-3'>
                                        <img 
                                            src={e.image} 
                                            alt={e.name} 
                                            className='rounded-full w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px] object-cover mx-auto hover:scale-110 transition-transform duration-300' 
                                        />
                                    </div>
                                    <h1 className='text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-900 leading-tight'>{e.name}</h1>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
