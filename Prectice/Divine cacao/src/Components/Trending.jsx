import React from 'react'

export default function Trending() {
  return (
    <div>
    {/* Trending */}
    <div className="trending">
        <h1>Trending</h1>
        <div className="line">
            <div className="box">
                <img src="b-1.webp" alt=""/>
                <h1>Premium Rich Plum <br/>   Cake</h1>
                <h2>₹ 400</h2>                
                <button>Order Now</button>
            </div>
            <div className="box" id="box-2">
                <img src="b-2.webp" alt=""/>
                <h1>Rich Plum Cake</h1>
                <h2>₹ 275</h2>
                <button>Order Now</button>
            </div>
            <div className="box" id="box-3">
                <img src="b-3.webp" alt=""/>
                <h1>classNameic Assorted <br/> Chocolate</h1>
                <h2>₹ 350</h2>
                <button>Order Now</button>
            </div>
            <div className="box" id="box-4">
                <img src="b-4.webp" alt=""/>
                <h1>Royal nut crunch <br/> Box</h1>
                <h2>₹ 400</h2>
                <button>Order Now</button>
            </div>
        </div>
    </div>
    {/* Trending */}

    </div>
  )
}
