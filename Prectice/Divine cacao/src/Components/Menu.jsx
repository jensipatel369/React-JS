import React from 'react'

export default function Menu() {
  return (
    <div>
    {/* Menu */}
    <div className="our">
        <h1>Our Menu</h1>
        <p>Our menu features a variety of Starters, Pizzas, Pasta, Pastries,<br/>Breads and so much more…</p>
        <div className="item">
            <div className="one">
                <img src="i-1.webp" alt=""/>
                <h6>STARTERS</h6>
            </div>
            <div className="one">
                <img src="i-2.jpg" alt=""/>
                <h6>PIZZA</h6>
            </div>
            <div className="one">
                <img src="i-3.jpg" alt=""/>
                <h6>CAKES</h6>
            </div>
            <div className="one">
                <img src="i-4.webp" alt=""/>
                <h6>BREADS</h6>
            </div>
        </div>
        <button>FULL MENU</button>
    </div>
    {/* Menu */}

    </div>
  )
}
