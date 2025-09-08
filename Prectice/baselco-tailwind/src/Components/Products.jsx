import React from 'react'

export default function Products() {
    let arr = [
        {
            "image": "./ear.jpg",
            "name": "",
            "price": "",
            "title": "",
            "description": "",
            "button": ""
        },
        {
            "image": "./shirt.jpg",
            "name": "",
            "price": "",
            "title": "",
            "description": "",
            "button": ""
        },
        {
            "image": "./coat.jpg",
            "name": "",
            "price": "",
            "title": "",
            "description": "",
            "button": ""
        },
        {
            "image": "./camel.jpg",
            "name": "",
            "price": "",
            "title": "",
            "description": "",
            "button": ""
        }
    ]
    return (
        <div className='text-center my-15'>
            <h1 className='text-[#9B9B9B] text-[14px] tracking-widest'>MADE THE HARD WAY</h1>
            <h1 className='text-[26px] tracking-wider my-2'>FEATURED PRODUCTS</h1>
            <h1 className='text-[#9B9B9B] text-[14px] tracking-widest'>___X___</h1>
            {
                arr.map((e,i)=>{
                    return <div className='w-290 m-auto border-1 my-5 flex flex-wrap justify-between' key={i}>
                        <img src={e.image} alt={e.name} className='w-[262.5px] h-[334.69px]' />
                        <img src={e.image} alt={e.name} className='w-[262.5px] h-[334.69px]' />
                        <img src={e.image} alt={e.name} className='w-[262.5px] h-[334.69px]' />
                        <img src={e.image} alt={e.name} className='w-[262.5px] h-[334.69px]' />
                    </div>
                })
            }
        </div>
    )
}
