import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#1e1e20] w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 gap-8 lg:gap-0">
          <img src="footer-logo.svg" alt="District Logo" className="w-[100px] sm:w-[125px] md:w-[150px] h-[40px] sm:h-[50px] md:h-[60px]" />
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-sm sm:text-base md:text-lg text-white font-medium text-center sm:text-left">
            <li><a href="" className="hover:text-gray-300 transition-colors duration-200">Terms & Conditions</a></li>
            <li><a href="" className="hover:text-gray-300 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="" className="hover:text-gray-300 transition-colors duration-200">Contact Us</a></li>
            <li><a href="" className="hover:text-gray-300 transition-colors duration-200">List your events</a></li>
          </ul>
          <div className="flex flex-col items-center order-first lg:order-last">
            <img src="scan.svg" alt="QR Code" className="w-[80px] h-[80px] sm:[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-lg hover:scale-105 transition-transform duration-300" />
            <h1 className="text-white mt-3 text-sm sm:text-base md:text-lg font-medium text-center">Scan to download the app</h1>
          </div>
        </div>
        <span className="inline-block w-[95%] mx-auto mt-6 sm:mt-8 border border-[#77777e]"></span>
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-6 sm:py-8 md:py-10 gap-6 lg:gap-0">
          <p className="text-[#77777e] text-xs sm:text-sm md:text-base text-center lg:text-left leading-relaxed max-w-4xl">By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <img src="f.png" alt="Facebook" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
            <img src="i.png" alt="Instagram" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
            <img src="t.png" alt="Twitter" className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
            <img src="y.svg" alt="YouTube" className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] hover:opacity-80 transition-opacity duration-200 cursor-pointer" />
          </div>
        </div>
      </footer>
    </>
  );
}
