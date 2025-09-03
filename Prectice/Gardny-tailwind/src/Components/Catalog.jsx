import React from 'react'

export default function Catalog() {
  return (
    <div>
      <div className="py-30 px-18 flex flex-wrap justify-center gap-5 max-sm:w-218 max-sm:justify-center max-sm:gap-10 max-sm:px-10 max-md:w-248 max-md:px-10 max-md:flex max-lg:w-256 max-lg:px-10 max-lg:flex max-xl:w-374 max-xl:px-10 max-xl:justify-center max-2xl:justify-center max-2xl:w-345" id="catalog">
        <div className="w-152 py-3 flex items-center gap-8 bg-[#DCE0D9] p-5 max-sm:w-175 max-sm:gap-12 max-md:w-111 max-lg:w-107 max-lg:gap-3">
          <img src="7.webp" alt="" className="img w-70 cursor-pointer max-sm:w-80 max-md:w-55 max-lg:w-55 max-xl:w-55" />
          <div>
            <h1 className="text-[#798D7A] max-sm:text-xl">Up to 50% Off</h1>
            <h1 className="text-[#354E33] text-2xl py-1 max-sm:text-3xl max-sm:py-3">Natural Plants</h1>
            <button className="bg-[#798D7A] py-1.5 text-white px-4 rounded-full text-sm max-sm:text-lg">SHOP NOW</button>
          </div>
        </div>
        <div className="w-152 py-3 flex items-center gap-8 bg-[#E9E8E1] p-5 max-sm:w-175 max-sm:gap-12 max-md:w-111 max-lg:w-107 max-lg:gap-5">
          <img src="6.webp" alt="" className="img w-70 cursor-pointer max-sm:w-80 max-md:w-55 max-lg:w-55 max-xl:w-55" />
          <div>
            <h1 className="text-[#798D7A] max-sm:text-xl">Up to 50% Off</h1>
            <h1 className="text-[#354E33] text-2xl py-1 max-sm:text-3xl max-sm:py-3">Shop Gift</h1>
            <button className="bg-[#798D7A] py-1.5 text-white px-4 rounded-full text-sm max-sm:text-lg">SHOP NOW</button>
          </div>
        </div>
        <div className="w-152 py-3 flex items-center gap-8 bg-[#DCE0CE] p-5 max-sm:w-175 max-sm:gap-12 max-md:w-111 max-lg:w-107 max-lg:gap-5">
          <img src="8.webp" alt="" className="img w-70 cursor-pointer max-sm:w-80 max-md:w-55 max-lg:w-55 max-xl:w-55" />
          <div>
            <h1 className="text-[#798D7A] max-sm:text-xl">Up to 50% Off</h1>
            <h1 className="text-[#354E33] text-2xl py-1 max-sm:text-3xl max-sm:py-3">Garden Care</h1>
            <button className="bg-[#798D7A] py-1.5 text-white px-4 rounded-full text-sm max-sm:text-lg">SHOP NOW</button>
          </div>
        </div>
        <div className="w-152 py-3 flex items-center gap-8 bg-[#F3EDDE] p-5 max-sm:w-175 max-sm:gap-12 max-md:w-111 max-lg:w-107 max-lg:gap-3">
          <img src="9.webp" alt="" className="img w-70 cursor-pointer max-sm:w-80 max-md:w-55 max-lg:w-55 max-xl:w-53" />
          <div>
            <h1 className="text-[#798D7A] max-sm:text-xl">Up to 50% Off</h1>
            <h1 className="text-[#354E33] text-2xl py-1 max-sm:text-3xl max-sm:py-3">Garden Accesories</h1>
            <button className="bg-[#798D7A] py-1.5 text-white px-4 rounded-full text-sm max-sm:text-lg">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  )
}
