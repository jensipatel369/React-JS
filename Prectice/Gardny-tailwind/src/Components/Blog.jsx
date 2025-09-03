import React from 'react'

export default function blog() {
  return (
    <div>
      <div id="blog" className="py-30 px-18 max-sm:w-218 max-sm:px-10 max-md:w-248 max-md:px-10 max-lg:w-256 max-lg:px-10 max-xl:w-345">
        <h1 className="text-[#354E33] text-2xl text-center max-sm:text-3xl">LATEST BLOG</h1>
        <div className="flex gap-5 justify-center mt-10 max-sm:flex-col max-sm:items-center max-md:flex-col max-md:items-center max-lg:flex-col max-lg:items-center max-xl:flex-col max-xl:items-center max-2xl:justify-center">
          <div className="flex">
            <img src="20.webp" alt="" className="w-76 max-sm:w-90 max-md:w-95 max-lg:w-100 max-xl:w-100"/>
              <div className="bg-[#e1ebe2] w-76 p-8 max-sm:w-95 max-md:w-95 max-lg:w-100 max-xl:w-100">
                <h1 className="text-[#212529] font-[600] text-lg max-sm:text-xl max-md:mt-5 max-lg:mt-5">Creative Garden Layouts for Every Space</h1>
                <p className="text-[#596A5A] text-[15px] mt-2 leading-5 max-sm:text-lg max-sm:mt-5">This month has been bustling with exciting development in the world of plants. From groundbreaking new devices to innovative...</p>
                <div className="text-[#596A5A] font-semibold text-xs flex items-center gap-2 mt-20 max-sm:text-lg max-sm:mt-26 max-md:mt-35 max-lg:mt-45 max-xl:mt-50"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="max-sm:w-4 max-sm:h-4" viewBox="0 0 512 512"><path fill="#596A5A" d="M448 0H64C28.6 0 0 28.6 0 64v256c0 35.4 28.6 64 64 64h128l-42.7 128l192-128H448c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64" /></svg>10 Comments</div>
              </div>
          </div>
          <div className="flex">
            <img src="21.webp" alt="" className="w-75 max-sm:w-90 max-md:w-95 max-lg:w-100 max-xl:w-100"/>
              <div className="bg-[#e1ebe2] w-76 p-8 max-sm:w-95 max-md:w-95 max-lg:w-100 max-xl:w-100">
                <h1 className="text-[#212529] font-[600] text-lg max-sm:text-xl max-md:mt-5 max-lg:mt-5">Top Trends in Morden Garden Landscaping</h1>
                <p className="text-[#596A5A] text-[15px] mt-2 leading-5 max-sm:text-lg max-sm:mt-5">This month has been bustling with exciting development in the world of plants. From groundbreaking new devices to innovative...</p>
                <div className="text-[#596A5A] font-semibold text-xs flex items-center gap-2 mt-20 max-sm:text-lg max-sm:mt-26 max-md:mt-35 max-lg:mt-45 max-xl:mt-50"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="max-sm:w-4 max-sm:h-4" viewBox="0 0 512 512"><path fill="#596A5A" d="M448 0H64C28.6 0 0 28.6 0 64v256c0 35.4 28.6 64 64 64h128l-42.7 128l192-128H448c35.4 0 64-28.6 64-64V64c0-35.4-28.6-64-64-64" /></svg>10 Comments</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
