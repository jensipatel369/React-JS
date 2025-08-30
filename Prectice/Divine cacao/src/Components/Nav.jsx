import React from 'react'

export default function Nav() {
  return (
    <div>

    {/* Yellow-line */}
    <div className="yel"></div>
    {/* Yellow-line */}

    {/* Navbar */}
    <div className="nav">
        <img src="logo.png" alt=""/>
        <div className="home">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SHOP</a>
            <a href="#">SPECIALITY CAKES</a>
            <a href="#">FIND US</a>
        </div>
        <div className="icon">
            <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#000000cc" d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6" stroke-width="0.3" stroke="#000000cc"/><path fill="#000000cc" d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22" stroke-width="0.2" stroke="#000000cc"/></svg>
            </div>
            <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#000000cc" d="M4.24 12.25a4.2 4.2 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.24 4.24 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5zm15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.22 5.22 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96z" stroke-width="0.5" stroke="#000000cc"/></svg>
            </div>
            <div className="circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><g fill="none" stroke="#000000cc" stroke-width="1.5"><circle cx="10" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17"/><path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"/></g></svg>
            </div>
        </div>
    </div>
    {/* Navbar */}

    </div>
  )
}
