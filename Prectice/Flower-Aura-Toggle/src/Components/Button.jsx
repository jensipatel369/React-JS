import { button } from '@material-tailwind/react'
import React from 'react'
import Card from './Card'

export default function Button() {
    let arr2 = [
        { button: "Birthday" },
        { button: "Anniversary" },
        { button: "Chocolate" },
        { button: "Photo Cake" },
        { button: "Kids" }
    ]

    return (
        <div className='bg-[#f4f7f8] px-11 pb-10'>
            <div className='bg-white rounded-t-3xl px-12 py-5 text-[15px]'>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-5'>
                        {
                            arr2.map((e, i) => {
                                return <button key={i} className='border-1 border-[#b3cbd3] rounded-lg text-[#1C2120] p-[12px] hover:bg-[#e7edef] hover:border-[#0e4d65] transition duration-300 cursor-pointer'>{e.button}</button>
                            })
                        }
                    </div>
                    <div className='border-1 border-[#b3cbd3] rounded-lg text-[#1C2120] p-[12px] flex items-center gap-2 hover:bg-[#e7edef] hover:border-[#0e4d65] transition duration-300 cursor-pointer'>
                        <button>Popularity</button>
                        <svg className='mt-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#1C2120" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" /></svg>
                    </div>
                </div>
            </div>
            <Card/>
        </div>
    )
}
