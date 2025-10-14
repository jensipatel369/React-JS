import React from 'react';

export default function Cards({ id, img, title, price, rate, reviews, time }) {
    const addToCart = (id) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ id, img, title, price, rate, reviews, time });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${title} added to cart!`);
    }

    return (
            <>
                <div className='w-[298px] border-1 rounded-2xl border-[#c2c2c2] relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute right-2.5 top-2.5 cursor-pointer' width="22" height="22" viewBox="0 0 14 14"><g fill="#fff"><path fill="#d7e0ff" d="M7 3.183C3.98-.522.792 2.111.75 4.949C.75 9.173 5.805 12.64 7 12.64s6.25-3.468 6.25-7.692C13.208 2.11 10.02-.522 7 3.183" /><path stroke="#197889" strokeLinecap="round" strokeLinejoin="round" d="M7 3.183C3.98-.522.792 2.111.75 4.95c0 4.224 5.055 7.69 6.25 7.69s6.25-3.467 6.25-7.692C13.208 2.11 10.02-.522 7 3.183" strokeWidth="1" /></g></svg>
                    <img src="veg.png" alt="" className='w-4 absolute left-3 top-69 bg-white p-[1px]' />
                    <img src={img} alt="" className='h-[304px] rounded-t-2xl' />
                    <div className='p-[16px] flex flex-col gap-[8px]'>
                        <h1 className='text-[#5c605f] text-[14px] font-semibold'>{title}</h1>
                        <h1 className='text-[#1C2120] text-[16px] font-semibold'>₹ {price}</h1>
                        <div className='flex items-center gap-2'>
                            <div className='bg-[#4caf50] rounded-md py-[1px] w-12 px-1 text-[12px] text-white flex items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" /></svg>
                                {rate}
                            </div>
                            <div className='bg-[#CCCCCC] w-1 h-1 rounded-full'></div>
                            <h1 className='text-[#197889] text-[14px] font-semibold'>{reviews}</h1>
                        </div>
                        <div className='flex justify-between'>
                            <h1 className='text-[#494D4D] font-semibold text-[12px]'>Earliest Delivery : <span className='text-[#197889]'>{time}</span></h1>
                            <button onClick={() => addToCart(id)} className='city cursor-pointer flex justify-center items-center p-1 rounded-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#0e4d65" fillRule="evenodd" d="M9.5 19.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4m7-1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4M3 4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .476.348L9.37 14.5H17a.5.5 0 0 1 0 1H9.004a.5.5 0 0 1-.476-.348L5.135 4.5H3.5A.5.5 0 0 1 3 4" clipRule="evenodd" /><path fill="#0e4d65" d="M8.5 13L6 6h13.337a.5.5 0 0 1 .48.637l-1.713 6a.5.5 0 0 1-.481.363z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </>
    );
}
