import React from 'react'

export default function Today() {
  return (
    <div>
      <div className="mt-40 bg-[#e1ebe2] text-[#354E33] py-30 max-sm:w-218 max-md:w-248 max-lg:w-256 max-xl:w-374 max-2xl:w-345">
        <div className="flex justify-between px-18 max-sm:px-10 max-md:px-10 max-lg:px-10 max-xl:px-10">
          <h1 className="text-[#354E33] text-2xl max-sm:text-3xl">TODAY DEALS</h1>
          <div className="flex items-center gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 12 24"><path fill="#354e33" fill-rule="evenodd" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#354e33" d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z" /></svg>
          </div>
        </div>
        <div className="my-5 flex flex-wrap gap-15 justify-center max-sm:my-15 max-sm:gap-5 max-lg:gap-7 max-xl:gap-10 max-2xl:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-[#e1ebe2] p-2 relative">
              <div className="bg-[#354E33] text-sm text-white font-bold text-center w-12 rounded-md absolute max-sm:text-lg max-sm:w-15 max-sm:top-4 max-sm:left-4">Sale</div>
              <img src="10.webp" alt="" className="w-75 mt-2 max-sm:w-95 max-sm:mt-7 max-lg:w-70"/>
            </div>
            <div className="flex my-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
            </div>
            <h1 className="font-semibold text-[#354E33] max-sm:text-xl">Calathea Sanderiana</h1>
            <h2 className="text-[#798D7A] max-sm:text-xl">$195.00</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#e1ebe2] p-2 relative">
              <div className="bg-[#354E33] text-sm text-white font-bold text-center w-12 rounded-md absolute max-sm:text-lg max-sm:w-15 max-sm:top-4 max-sm:left-4">Sale</div>
              <img src="11.webp" alt="" className="w-70 mt-7 max-sm:w-95 max-sm:mt-12 max-lg:w-65"/>
            </div>
            <div className="flex my-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
            </div>
            <h1 className="font-semibold text-[#354E33] max-sm:text-xl">ZZ Plant</h1>
            <h2 className="text-[#798D7A] max-sm:text-xl">$195.00</h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-[#e1ebe2] p-2 relative">
              <div className="bg-[#354E33] text-sm text-white font-bold text-center w-12 rounded-md absolute max-sm:text-lg max-sm:w-15 max-sm:top-4 max-sm:left-4">Sale</div>
              <img src="12.webp" alt="" className="w-70 mt-7 max-sm:w-95 max-lg:w-65"/>
            </div>
            <div className="flex my-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
            </div>
            <h1 className="font-semibold text-[#354E33] max-sm:text-xl">Lemon Grass Plant</h1>
            <h2 className="text-[#798D7A] max-sm:text-xl">$195.00</h2>
          </div>
          <div className="flex flex-col items-center max-md:mt-5">
            <div className="bg-[#e1ebe2] p-2 relative">
              <div className="bg-[#354E33] text-sm text-white font-bold text-center w-12 rounded-md absolute max-sm:text-lg max-sm:w-15 max-sm:top-4 max-sm:left-4">Sale</div>
              <img src="13.webp" alt="" className="w-70 mt-7 max-sm:w-95 max-lg:w-65"/>
            </div>
            <div className="flex my-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="max-sm:w-7 max-sm:h-7" viewBox="0 0 24 24"><path fill="#f2b827" d="m12 17.275l-4.15 2.5q-.275.175-.575.15t-.525-.2t-.35-.437t-.05-.588l1.1-4.725L3.775 10.8q-.25-.225-.312-.513t.037-.562t.3-.45t.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45t.537-.15t.537.15t.388.45l1.875 4.45l4.85.425q.35.05.55.225t.3.45t.038.563t-.313.512l-3.675 3.175l1.1 4.725q.075.325-.05.588t-.35.437t-.525.2t-.575-.15z" /></svg>
            </div>
            <h1 className="font-semibold text-[#354E33] max-sm:text-xl">Ficus Lyrata Plant</h1>
            <h2 className="text-[#798D7A] max-sm:text-xl">$195.00</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
