import React from 'react'

export default function Nav({dark,setDark}) {
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
    <div className='flex justify-between px-30 py-4' style={{backgroundColor : (!dark) ? "white" : "black" }}>
      <div className='flex gap-5 items-center'>
        <img src="logo.png" alt="" className='w-[202px] h-[54px]' />
        <div className='city w-[240px] h-[50px] p-[15px] rounded-lg flex justify-between items-center'>
          <div className='flex gap-3'>
            <img src="india.png" alt="" className='w-[32px] rounded-sm' />
            <h1 className='text-[13px] font-semibold text-[#0E4D65]'>Rajkot</h1>
          </div>
          <img src="edit.svg" alt="" />
        </div>
        <div className='bg-[#EDF0FA] py-[10px] ml-7 px-[25px] flex justify-between items-center rounded-lg w-[330px] h-[50px]'>
          <input type="text" placeholder='Search for flowers' />
          <img src="search.svg" alt="" className='w-[24px] h-[24px]' />
        </div>
      </div>
      <div className='flex gap-5'>
       {
         arr.map((e,i)=>{
          return <div className='flex flex-col gap-0.5 items-center justify-center' key={i}>
            <img src={e.image} alt="" className='w-[25px]' />
            <h1 className='text-[13px]'>{e.title}</h1>
          </div>
        })
       }
      </div>
        <button onClick={setDark}>Light</button>
    </div>
  )
}
