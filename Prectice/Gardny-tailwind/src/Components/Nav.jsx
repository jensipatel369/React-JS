import React from 'react'

export default function Nav() {
    return (
        <div>
            <div className="hero h-170 px-18 max-sm:px-10 max-sm:w-218 max-sm:h-320 max-md:w-248 max-md:px-10 max-md:h-150 max-lg:w-256 max-lg:h-150 max-lg:px-10 max-xl:w-375 max-2xl:w-345">
                <nav className="text-[#354E33] py-5 flex items-center justify-between">
                    <ul>
                        <li><img src="logo.webp" alt="" className="w-35 cursor-pointer"/></li>
                    </ul>
                    <ul className="flex gap-8 font-bold text-sm max-sm:hidden max-md:gap-5 max-lg:gap-5">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#catalog">CATALOG</a></li>
                        <li><a href="#shop">SHOP ALL</a></li>
                        <li><a href="#blog">BLOG</a></li>
                        <li className="flex items-center"><a href="#">PAGES</a><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#354E33" fill-rule="evenodd" d="m8 10.207l3.854-3.853l-.707-.708L8 8.793L4.854 5.646l-.708.708z" clip-rule="evenodd" /></svg></li>
                        <li><a href="#">CONTACT US</a></li>
                    </ul>
                    <ul className="flex gap-3 max-md:gap-2 max-lg:gap-2 max-xl:gap-2">
                        <li><input type="search" placeholder="Search..." className="px-3 w-40 text-sm border-1 rounded-full py-1 max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden"/></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hidden max-sm:flex max-md:flex max-lg:flex max-xl:flex" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hidden max-sm:flex" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z" /></svg></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3" /></svg></li>
                        <li><svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="black" stroke-width="1.8"><circle cx="10" cy="19" r="1.5" /><circle cx="17" cy="19" r="1.5" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17" /><path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z" /></g></svg></li>
                    </ul>
                </nav>
                <div className="flex gap-10 mt-12 max-sm:flex-col-reverse max-sm:items-center max-sm:gap-20" id="home">
                    <div className="w-150 flex flex-col justify-center max-sm:items-center">
                        <h1 className="text-[#354E33] text-sm max-sm:text-lg max-md:text-xs max-lg:text-xs">--- BEST QUALITY PLANTS ---</h1>
                        <h1 className="text-[#354E33] text-[52px] mt-5 max-sm:text-[59px] max-md:text-[45px] max-lg:text-[40px]">DISCOVER AMAZING</h1>
                        <h1 className="text-[52px] text-[#798D7A] max-sm:text-[59px] max-md:text-[45px] max-lg:text-[40px]">VARIETY OF PLANTS</h1>
                        <ul className="flex gap-3 mt-5 max-sm:mt-8">
                            <li>
                                <button className="p-3 bg-white rounded-md text-[#354E33] w-30 text-sm flex flex-col items-center max-sm:w-40 max-sm:text-lg">
                                    <img src="price.svg" alt="" className="w-10 max-sm:w-17"/>Special Price
                                </button>
                            </li>
                            <li>
                                <button className="p-3 bg-white rounded-md text-[#354E33] w-30 text-sm flex flex-col items-center max-sm:w-40 max-sm:text-lg">
                                    <img src="truck.svg" alt="" className="w-10 max-sm:w-17"/>Free Delivery
                                </button>
                            </li>
                            <li>
                                <button className="p-3 bg-white rounded-md text-[#354E33] w-30 text-sm flex flex-col items-center max-sm:w-40 max-sm:text-lg">
                                    <img src="like.svg" alt="" className="w-10 max-sm:w-17"/>Guarantee
                                </button>
                            </li>
                        </ul>
                        <p className="text-[#798D7A] py-5 max-sm:text-center max-sm:text-xl max-sm:py-8">From vibrant flowering plants to lush tropical greens, we offer an incredible variety to turn your space into a living paradise.</p>
                        <button className="bg-[#354E33] py-2 w-30 text-sm rounded-full text-white max-sm:text-xl max-sm:py-3 max-sm:w-40">SHOP NOW</button>
                    </div>
                    <img src="1.webp" alt="" className="w-150 max-md:w-100 max-md:h-100 max-lg:w-100 max-lg:h-100 max-xl:w-100 max-xl:h-100"/>
                </div>
            </div>
        </div>
    )
}
