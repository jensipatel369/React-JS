import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="bg-[#354E33] px-18 pt-22 text-[#FFFFFFBF] flex flex-wrap gap-20 
                      max-sm:w-218 max-sm:px-10 max-sm:gap-20 max-sm:justify-center max-sm:pb-20 
                      max-md:pb-20 max-xl:pb-20 max-2xl:pb-20 max-md:px-10 max-md:w-248 max-md:justify-center 
                      max-lg:pb-20 max-lg:px-10 max-lg:w-256 max-lg:justify-center max-xl:w-375 
                      max-xl:justify-center max-2xl:w-345">

        {/* Logo and Description Section */}
        <ul className="max-sm:flex max-sm:flex-col max-sm:items-center 
                       max-md:flex max-md:flex-col max-md:items-center 
                       max-lg:flex max-lg:flex-col max-lg:items-center 
                       max-xl:flex max-xl:flex-col max-xl:items-center">

          {/* Logo */}
          <li>
            <img src="footer-logo.webp" alt="Company Logo" className="w-35 max-sm:w-60" />
          </li>

          {/* Description */}
          <li>
            <p className="py-5 leading-7 max-sm:text-center max-sm:text-2xl max-sm:my-5 max-sm:leading-9 
                          max-md:text-center max-lg:text-center max-xl:text-center">
              Transform your outdoor space with our expert garden <br />
              services! From design to maintenance, we create beautiful, <br />
              thriving gardens tailored to your vision. Let us bring your <br />
              dream garden to life—professional, reliable, and passionate <br />
              about nature.
            </p>
          </li>

          {/* Social Media Icons */}
          <li className="flex gap-6">
            {/* Facebook */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="max-sm:w-8 max-sm:h-8" viewBox="0 0 24 24">
              <path fill="#FFFFFFBF" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
            </svg>

            {/* Twitter */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="max-sm:w-8 max-sm:h-8" viewBox="0 0 24 24">
              <path fill="#FFFFFFBF" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
            </svg>

            {/* Instagram */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="max-sm:w-8 max-sm:h-8" viewBox="0 0 24 24">
              <g fill="none">
                <path stroke="#FFFFFFBF" strokeWidth="2" d="M3 11c0-3.771 0-5.657 1.172-6.828S7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172S21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828S16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172S3 16.771 3 13z" />
                <circle cx="16.5" cy="7.5" r="1.5" fill="#FFFFFFBF" />
                <circle cx="12" cy="12" r="3" stroke="#FFFFFFBF" strokeWidth="2" />
              </g>
            </svg>

            {/* YouTube */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="max-sm:w-8 max-sm:h-8" viewBox="0 0 24 24">
              <path fill="#FFFFFFBF" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
            </svg>

            {/* WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="max-sm:w-8 max-sm:h-8" viewBox="0 0 24 24">
              <path fill="#FFFFFFBF" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23" />
            </svg>
          </li>
        </ul>

        {/* Footer Navigation */}
        <div className="flex gap-20 max-lg:gap-35 max-xl:gap-30">
          {/* Company Links */}
          <ul className="leading-8 max-sm:text-xl max-sm:leading-10">
            <li className="text-white text-lg font-bold max-sm:text-2xl"><a href="#">Company</a></li>
            <li className="mt-5"><a href="#">Home</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          {/* Services Links */}
          <ul className="leading-8 max-sm:text-xl max-sm:leading-10">
            <li className="text-white text-lg font-bold max-sm:text-2xl"><a href="#">Our Services</a></li>
            <li className="mt-5"><a href="#">Garden Design</a></li>
            <li><a href="#">Garden Maintenance</a></li>
            <li><a href="#">Planting Services</a></li>
            <li><a href="#">Tree Care</a></li>
            <li><a href="#">Irrigation Services</a></li>
            <li><a href="#">Specialty Services</a></li>
          </ul>

          {/* Contact Information */}
          <ul className="max-sm:text-xl">
            <li className="text-white font-bold flex items-center gap-2 mt-5 max-sm:mt-8 max-sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="max-sm:w-6 max-sm:h-6" viewBox="0 0 24 24">
                <path fill="none" stroke="#798d7a" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 6v5.8a.2.2 0 0 1-.2.2H8m14 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" />
              </svg>
              We're Open
            </li>
            <li className="text-[#FFFFFFBF]">Monday - Friday 08.00 - 18.00</li>

            <li className="text-white font-bold flex items-center gap-2 mt-5 max-sm:mt-11 max-sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="max-sm:w-6 max-sm:h-6" viewBox="0 0 24 24">
                <path fill="#798d7a" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7" />
              </svg>
              Office Location
            </li>
            <li className="text-[#FFFFFFBF]">100 S Main St, New York, NY</li>

            <li className="text-white font-bold flex items-center gap-2 mt-5 max-sm:mt-11 max-sm:gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" className="max-sm:w-6 max-sm:h-6" viewBox="0 0 20 20">
                <path fill="#798d7a" d="M0 8v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-10 4z" />
                <path fill="#798d7a" d="M2 2a2 2 0 0 0-2 2v2l10 4l10-4V4a2 2 0 0 0-2-2z" />
              </svg>
              Send a Message
            </li>
            <li className="text-[#FFFFFFBF]">contact@gardyn.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Image */}
      <img src="footer.jpg" alt="Footer Background" className="w-full max-sm:hidden max-md:hidden max-lg:hidden max-xl:hidden max-2xl:hidden" />
    </div>
  );
}
