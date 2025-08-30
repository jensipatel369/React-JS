import React from 'react'

export default function Footer() {
  return (
    <div>

    {/* Footer */}
    <footer>
        <div className="f1">
            <img src="logo.png" alt=""/>
            <p>Bringing you freshly baked delights crafted with love,<br/>quality, and a touch of sweetness.</p>
        </div>
        <div className="f2">
            <ul>
                <li className="li"><a href="#">Further Links</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Return & Refund Policy</a></li>
            </ul>
        </div>
        <div className="f3">
            <h2>Subscribe us</h2>
            <div className="foot">
                <div className="i1"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#fec42d" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" stroke-width="0.5" stroke="#fec42d"/></svg></div>
                <div className="i1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#fec42d" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"/><path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"/><path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011"/></g></svg></div>
            </div>
        </div>
    </footer>
    {/* Footer */}

    {/* Copy */}
    <div className="copy">Copyright © 2024 DC PASTRIES. All Rights Reserved, Created By VimiMagic</div>
    {/* Copy */}
      
    </div>
  )
}
