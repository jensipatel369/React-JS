import React from 'react'

export default function Footer() {
    return (
        <div className="bg-white text-gray-700 font-sans">
            <div className='bg-gray-50 mx-30 rounded-2xl mt-10 px-10 shadow-sm border-[1px] border-gray-200'>
                <div className="flex justify-between py-8">
                    <div className='flex gap-25'>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-600">Sell With Us</a></li>
                                <li><a href="#" className="hover:text-blue-600">Coupons & Deals</a></li>
                                <li><a href="#" className="hover:text-blue-600">Cancellation & Refund</a></li>
                                <li><a href="#" className="hover:text-blue-600">Terms and Conditions</a></li>
                                <li><a href="#" className="hover:text-blue-600">Retail Stores</a></li>
                                <li><a href="#" className="hover:text-blue-600">Career</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Resources</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-600">Media</a></li>
                                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-blue-600">Reviews</a></li>
                                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
                                <li><a href="#" className="hover:text-blue-600">Quotes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-3">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-blue-600">Corporate Gifts</a></li>
                                <li><a href="#" className="hover:text-blue-600">Franchise</a></li>
                                <li><a href="#" className="hover:text-blue-600">FAQ</a></li>
                                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
                                <li><a href="#" className="hover:text-blue-600">WhatsApp</a></li>
                                <li><a href="#" className="hover:text-blue-600">Download App</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="font-medium mb-4">Simplify your gifting experience with our app.</p>
                        <div className='flex gap-3'>
                            <img src="Qr.svg" alt="QR Code" className="mb-3" />
                            <div className="flex flex-col items-center md:items-start space-y-2 mb-4">
                                <img src="play store.svg" alt="Google Play" className="rounded shadow" />
                                <img src="app store.svg" alt="App Store" className="rounded shadow" />
                            </div>
                        </div>
                        <p className="font-medium mb-3">Spread The Love On Social Media</p>
                        <div className="flex justify-center md:justify-start space-x-3">
                            <img src="fb.svg" alt="Facebook" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                            <img src="twitter.svg" alt="X" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                            <img src="toutube.svg" alt="YouTube" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                            <img src="pinterest.svg" alt="Pinterest" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                            <img src="insta.png" alt="Instagram" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                            <img src="likedin.svg" alt="LinkedIn" className="w-9 h-9 rounded-full hover:scale-110 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                    <img src="logo.png" alt="Logo" className="w-24" />
                </div>

                <p>Copyright © 2025. FA GIFTS PVT. LTD</p>

                <div className="flex space-x-3">
                    <img src="all.png" alt="" />
                </div>
            </div>
        </div>
    )
}
