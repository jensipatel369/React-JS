import React from 'react'

export default function Nav() {
  let arr = [
    {
      image : "track.svg",
      title : "Track Order"
    },
    {
      image : "cart.svg",
      title : "Cart"
    },
    {
      image : "rupees.svg",
      title : "INR"
    },
    {
      image : "user.svg",
      title : "My Account"
    },
    {
      image : "menu.svg",
      title : "More"
    }
  ]

  return (
    <div className='flex justify-between px-30 py-4'>
      <div className='flex gap-5 items-center'>
        <img src="logo.png" alt="" className='w-[202px] h-[54px]' />
      </div>
      <div className='flex gap-5'>
       {
         arr.map((e,i)=>{
          return <div className='flex flex-col gap-0.5 items-center justify-center'>
            <img src={e.image} alt="" className='w-[25px]' />
            <h1 className='text-[13px]'>{e.title}</h1>
          </div>
        })
       }
      </div>
    </div>
  )
}
