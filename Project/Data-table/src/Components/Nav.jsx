import React from 'react'

export default function Nav() {
    return (
        <>
            <div className='bg-[#f4f4f4] h-6.5 w-full'></div>
            <div className='flex justify-between items-center px-7.5'>
                <img src="logo.png" alt="" className='w-30' />
                <div className='flex gap-6 text-[13px]'>
                    <div className='flex items-center justify-between gap-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path fill="none" stroke="#f05a22" strokeLinejoin="round" d="M5 11.5h4M5 9h6M5 6.5h6m-5.5-4h-2v12h9v-12h-2m-5-1h5l-.625 2h-3.75z" strokeWidth="0.7" /></svg>
                        My Orders
                    </div>
                    <div className='flex items-center justify-between gap-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><g fill="none"><path stroke="#f05a22" strokeWidth="1" d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.703c2.739 0 4.108 0 5.13.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.853 21H11.15c-3.933 0-5.899 0-7.065-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"/><circle cx="15" cy="9" r="1" fill="#f05a22"/><circle cx="9" cy="9" r="1" fill="#f05a22"/><path stroke="#f05a22" strokeLinecap="round" strokeWidth="1" d="M9 6V5a3 3 0 1 1 6 0v1"/></g></svg>
                        No Items in <br/> the Bag
                    </div>
                    <div className='flex items-center justify-between gap-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 32 32"><path fill="#f05a22" d="M9.923 19.733a.5.5 0 1 0-.846.534C10.5 22.519 13.161 24 16 24s5.5-1.481 6.923-3.733a.5.5 0 1 0-.846-.534C20.842 21.688 18.504 23 16 23s-4.842-1.312-6.077-3.267M13.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14S23.732 2 16 2M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16" strokeWidth="0.5" stroke="#f05a22"/></svg>
                        Log In/Sign Up
                    </div>
                </div>
            </div>
        </>
    )
}
