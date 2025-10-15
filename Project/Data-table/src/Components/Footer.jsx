import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-[#f4f4f4] h-5 w-full'></div>
            <div className="px-8 py-10 bg-white text-gray-800 space-y-8 text-[12px]">
                <div>
                    <h1 className="text-2xl font-bold text-[16px]">Paytm Mall - India’s Leading Online Shopping Experience, Brought to You by Paytm</h1>
                    <p className="mt-4 text-gray-700">
                        Online shopping with Paytm Mall is quick, convenient and trouble-free. You can shop for the desired product right from the comfort of your home and get them delivered straight to your doorstep.
                    </p>
                    <p className="mt-2 text-gray-700">
                        Browse Paytm Mall and get access to over 65 million products ranging from smartphones, tablets to laptops, sarees, kurtas & kurtis to t-shirts, sneakers, sport shoes to sandals, earrings, watches to fitness bands, chimneys, cookware to gas stoves, dairy products, baby products to makeup kits and many more.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[16px]">What are we offering on Paytmmall.com?</h2>
                    <p className="mt-3 text-gray-700">
                        Paytm Mall strives hard to make your online shopping a more pleasant and cost-effective experience by providing top quality products at the best price rates in India. Our collection of products consists of electronic appliances, clothes, grocery, home and kitchen products, backpacks, automobiles, books and stationery, to name a few.
                    </p>
                    <p className="mt-2 text-gray-700">
                        The super value bazaar offers an extensive range of grocery products like daily food staples, ready to cook food, high nutrition food, beauty, make-up, personal care, health, baby care products and many more.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-[16px]">Benefits of shopping on Paytmmall.com</h2>
                    <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
                        <li><span className="font-bold text-black">User-Friendly :</span> Leading online shopping experience in India which is simple and faster to load.</li>
                        <li><span className="font-bold text-black">Safe & Secure Shopping :</span> Every transaction at Paytm Mall is securely processed and your money is in safe hands.</li>
                        <li><span className="font-bold text-black">Check Out Closely :</span> View products of your choice in detail with clear images and thorough descriptions.</li>
                        <li><span className="font-bold text-black">Multiple Payment Options :</span> Choose credit/debit cards, Netbanking, UPI or Paytm Wallet for quick checkouts.</li>
                        <li><span className="font-bold text-black">Paytm Postpaid Services :</span> Buy now, pay later with Paytm-ICICI Bank Postpaid.</li>
                        <li><span className="font-bold text-black">Order History :</span> All your orders in one place with easy tracking, returns & replacements.</li>
                        <li><span className="font-bold text-black">24x7 Customer Care :</span> Reach out anytime at <a href="#" className="text-blue-600 underline">paytmmall.com/care</a> or call <span className="font-semibold">01204606060</span>.</li>
                    </ul>
                </div>
                <div className="flex gap- border-t border-gray-200 pt-8 text-center text-[#828282] text-[12px]">
                    <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mb-4' width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="#828282" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81c-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42c-.54-52.67-42.32-96.81-95.08-96.81" /></svg>
                        <div className="text-[14px] font-medium">24x7 Help</div>
                        <p className="mt-2 text-gray-600">Need help? <a href="#" className="text-blue-600 underline">Click Here</a> or call 0120 4606060.</p>
                    </div>
                    <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='mb-4' width="22" height="22" viewBox="0 0 16 16"><g fill="#828282"><path d="M8.069 0c.262 0 .52.017.76.057a4 4 0 0 1 .697.154q.34.102.674.263c.217.103.44.229.663.366c.377.24.748.434 1.126.589a7.5 7.5 0 0 0 2.331.525q.607.045 1.257.046v4q0 1.139-.291 2.166a9 9 0 0 1-.789 1.943a10.3 10.3 0 0 1-1.188 1.725a15 15 0 0 1-1.492 1.532a18 18 0 0 1-1.703 1.325q-.892.62-1.794 1.143l-.24.143l-.24-.143a27 27 0 0 1-1.806-1.143a16 16 0 0 1-1.703-1.325a15 15 0 0 1-1.491-1.532a11 11 0 0 1-1.194-1.725a9.8 9.8 0 0 1-.789-1.943A8 8 0 0 1 .571 6V2q.65-.001 1.258-.046a8 8 0 0 0 1.188-.171c.383-.086.766-.2 1.143-.354A6.6 6.6 0 0 0 5.28.846C5.72.56 6.166.349 6.606.21A4.8 4.8 0 0 1 8.069 0m6.502 2.983a9.6 9.6 0 0 1-2.234-.377a8 8 0 0 1-2.046-.943A4.3 4.3 0 0 0 9.23 1.16A3.9 3.9 0 0 0 8.074.994a4 4 0 0 0-1.165.166a4 4 0 0 0-1.058.503A8 8 0 0 1 3.8 2.61q-1.063.309-2.229.378v3.017q0 .993.258 1.908a8.6 8.6 0 0 0 .72 1.743a9.6 9.6 0 0 0 1.08 1.572c.417.491.862.948 1.342 1.382q.72.651 1.509 1.206q.797.556 1.594 1.017a22 22 0 0 0 1.589-1.017a15 15 0 0 0 1.514-1.206c.48-.434.926-.891 1.343-1.382a9.6 9.6 0 0 0 1.08-1.572a8.3 8.3 0 0 0 .709-1.743a6.8 6.8 0 0 0 .262-1.908z" /><path fillRule="evenodd" d="m11.797 4.709l-.44-.378l-.406.035l-4.36 5.148l-1.485-2.12l-.4-.068l-.463.331l-.069.4l1.909 2.726l.217.12l.457.028l.234-.102l4.835-5.715z" clipRule="evenodd" /></g></svg>
                        <div className="text-[14px] font-medium">Paytm Trust</div>
                        <p className="mt-2 text-gray-600">Your money is yours! All refunds come with no question asked guarantee.</p>
                    </div>
                    <div className="flex flex-col items-center text-center max-w-sm mx-auto">
                        <div className="w-[24px] h-[24px] flex items-center justify-center border-2 border-gray-400 rounded-full mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" fill="#828282" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z" /></svg>
                        </div>
                        <div className="text-[14px] font-medium">100% Assurance</div>
                        <p className="text-gray-600 mt-2">At Paytm, we provide 100% assurance. If you have any issue, your money is immediately refunded. Sit back and enjoy your shopping.</p>
                    </div>
                    <div className='flex flex-col items-center text-center max-w-sm mx-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className='mb-4' viewBox="0 0 24 24"><path fill="#828282" fill-rule="evenodd" d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676c.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203c.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm5.719 5.914a.75.75 0 0 1 .117 1.055l-4 5a.75.75 0 0 1-1.116.061l-2-2a.75.75 0 0 1 1.06-1.06l1.408 1.407l3.476-4.346a.75.75 0 0 1 1.055-.117" clipRule="evenodd" /></svg>
                        <div className="text-[14px] font-medium">Paytm Mall Promise</div>
                        <p className="mt-2 text-gray-600">Products with this tag are quality checked & shipped the same day from certified warehouses.</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f4f4] h-7 w-full'></div>
            <div className='text-[10px] text-gray-600 py-1.5 ml-5'>Cashback would be added as Paytm Cash, which is One97 Communications Ltd loyalty program. It can be used to pay for goods & services sold by merchants that accept ‘Pay with Paytm’</div>
            <div class="bg-[#f5f5f5] p-4 flex justify-between items-center text-sm text-red-600">
                <div class="flex space-x-4 text-[12px] font-semibold">
                    <div>About Us</div>
                    <div>Partner with us</div>
                    <div>Terms & Conditions</div>
                    <div>Media</div>
                    <div>Grievance policy</div>
                    <div>Bug bounty</div>
                    <div>Return/Cancellation policy</div>
                </div>
                <div class="flex space-x-4 text-orange-400 text-xl">
                    <div><i class="fab fa-apple"></i></div>
                    <div><i class="fab fa-facebook-f"></i></div>
                    <div><i class="fab fa-instagram"></i></div>
                    <div><i class="fab fa-youtube"></i></div>
                </div>
            </div>
            <div class="bg-white py-4 px-4 flex justify-between items-center">
                <div class="flex space-x-4">
                    <img src="all.png" alt="" className='w-85' />
                </div>
                <div class="flex space-x-4 text-[11px]">
                    <div class="border border-gray-200 pr-4 pl-1">
                        <div className='flex gap-1'>
                            <img src="logo.png" alt="" className='w-10' />
                            Seller
                        </div>
                        <div className='font-semibold'>Become a Seller</div>
                    </div>
                    <div class="border border-gray-200 pr-4 pl-1">
                        <div className='flex gap-1'>
                            <img src="wallet.png" alt="" className='w-5' />
                            Wallet
                        </div>
                        <div className='font-semibold'>Payment Services</div>
                    </div>
                </div>
            </div>
            <div className='bg-[#f4f4f4] h-4 w-full'></div>
            <div className='bg-white h-12 w-full'></div>
        </>
    )
}
