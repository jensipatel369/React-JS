import React, { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 h-[60px] sm:h-[70px] lg:h-[75px] w-full fixed bg-white z-50 shadow-sm">
        <div className="flex items-center">
          <img src="logo.jpg" alt="District Logo" className="w-12 sm:w-16 md:w-20 lg:w-24 h-auto" />
          <div className="hidden lg:flex ml-3 items-center border-l border-[#e8eaed] pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2" width="20" height="20" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none"><path d="M12 2a8 8 0 0 1 8 8c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 8-8m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd" /><path stroke="#6444e4" strokeWidth="2" d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0Z" /><path stroke="#6444e4" strokeWidth="2" d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" /></g></svg>
            <div className="ml-2 leading-5">
              <h1 className="text-[#131316] text-sm font-bold">Mavdi</h1>
              <h1 className="text-[#545459] font-[500] text-xs">Rajkot</h1>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-sm font-[500] gap-6 xl:gap-8 text-[#545459]">
          <li><a href="" className="text-black bg-[#eae5ff] px-3 py-2 rounded-full text-sm">For you</a></li>
          <li><a href="" className="hover:text-black transition-colors">Dining</a></li>
          <li><a href="" className="hover:text-black transition-colors">Events</a></li>
          <li><a href="" className="hover:text-black transition-colors">Movies</a></li>
          <li><a href="" className="hover:text-black transition-colors">Activities</a></li>
        </ul>
        
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 px-3 gap-2 py-2 border border-gray-300 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-gray-400" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#6444e4" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6" /><path fill="#6444e4" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22" /></svg>
            <input type="search" className="w-full outline-none text-sm placeholder-gray-500" placeholder="Search..." />
          </div>
          
          {/* Mobile Search Icon */}
          <div className="sm:hidden bg-[#d1d5db] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#6444e4" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6" /><path fill="#6444e4" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22" /></svg>
          </div>
          
          {/* Profile Icon */}
          <div className="bg-[#d1d5db] p-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><g fill="none" stroke="#fff" strokeWidth="1.5"><path strokeLinejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" /><circle cx="12" cy="7" r="3" /></g></svg>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[60px] sm:top-[70px] left-0 right-0 bg-white shadow-lg z-40 border-t">
          <div className="px-4 py-4 space-y-4">
            <ul className="space-y-3">
              <li><a href="" className="block text-black bg-[#eae5ff] px-3 py-2 rounded-full text-sm font-medium">For you</a></li>
              <li><a href="" className="block text-[#545459] hover:text-black transition-colors py-2">Dining</a></li>
              <li><a href="" className="block text-[#545459] hover:text-black transition-colors py-2">Events</a></li>
              <li><a href="" className="block text-[#545459] hover:text-black transition-colors py-2">Movies</a></li>
              <li><a href="" className="block text-[#545459] hover:text-black transition-colors py-2">Activities</a></li>
            </ul>
            <div className="pt-4 border-t">
              <div className="flex items-center w-full px-3 gap-2 py-2 border border-gray-300 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-gray-400" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#6444e4" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6" /><path fill="#6444e4" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22" /></svg>
                <input type="search" className="w-full outline-none text-sm placeholder-gray-500" placeholder="Search..." />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}