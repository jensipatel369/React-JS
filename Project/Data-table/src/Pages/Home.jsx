import React, { useState } from 'react'
import Card from '../Components/Card';

export default function Home() {
    const [search, setSearch] = useState("")
    const [cat, setCat] = useState("all")

    let brand = [
        { img: "1.jpg", name: "Central", category: "Clothing" },
        { img: "2.jpg", name: "Pantaloons", category: "Clothing" },
        { img: "3.png", name: "U.S.Polo Assn.", category: "Clothing" },
        { img: "4.png", name: "Brand Factory", category: "Clothing" },
        { img: "5.jpg", name: "Levi's", category: "Clothing" },
        { img: "6.jpg", name: "ONLY", category: "Clothing" },
        { img: "7.jpg", name: "UCB", category: "Clothing" },
        { img: "8.jpg", name: "BIBA", category: "Clothing" },
        { img: "9.jpg", name: "Bewakoof.com", category: "Clothing" },
        { img: "10.jpg", name: "Myntra", category: "Online Store" },
        { img: "11.png", name: "Iconic", category: "Clothing" },
        { img: "12.jpg", name: "Raymonds", category: "Clothing" },
        { img: "13.jpg", name: "Jockey", category: "Clothing" },
        { img: "14.jpg", name: "Vero Moda", category: "Clothing" },
        { img: "15.png", name: "Beverly Hills Polo...", category: "Clothing" },
        { img: "16.png", name: "Madame", category: "Clothing" },
        { img: "17.jpg", name: "Peter England", category: "Clothing" },
        { img: "18.jpg", name: "Van Heusen", category: "Clothing" },
        { img: "19.jpg", name: "Louis Philippe", category: "Clothing" },
        { img: "20.jpg", name: "Planet Fashion", category: "Clothing" },
        { img: "21.jpg", name: "Bata", category: "Footwear" },
        { img: "22.jpg", name: "Nike", category: "Sportswear" },
        { img: "23.png", name: "Puma", category: "Sportswear" },
        { img: "24.jpg", name: "Khadim's", category: "Footwear" },
        { img: "25.jpg", name: "Red Chief", category: "Footwear" },
        { img: "26.jpg", name: "Speedo", category: "Sportswear" },
        { img: "27.jpg", name: "Sports Station", category: "Sportswear" },
        { img: "28.jpg", name: "Woodland", category: "Footwear" },
        { img: "29.jpg", name: "Metro Shoes", category: "Footwear" },
        { img: "30.jpg", name: "Mochi", category: "Footwear" },
        { img: "33.jpg", name: "La Senza", category: "Lingerie" },
        { img: "31.jpg", name: "Regal", category: "Footwear" },
        { img: "32.jpg", name: "Steve Madden", category: "Footwear" }
    ];


    const searchedData = brand.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

    const filteredData = [...searchedData].filter((item) => {
        if (cat == "all") {
            return item
        } else {
            return item.category == cat;
        }
    })

    return (
        <>
            <div>
                <div className='border-t-1 border-[#d6d6d6] py-4 px-7.5 flex gap-5 justify-center items-center text-[13px]'>
                    <div className='border-1 border-[#d6d6d6] py-2 w-150 px-3 flex items-center justify-between'>
                        <input type="search" id='search' placeholder='Search for a Brand' className='outline-none w-full' required onChange={(e) => setSearch(e.target.value)} />
                        <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer' width="17" height="17" viewBox="0 0 24 24"><path fill="none" stroke="#f05a22" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" /></svg>
                    </div>
                    <div className='border-1 border-[#d6d6d6] py-2 text-[#878787] flex gap-2 cursor-pointer px-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#f05a22" d="M4 17.27v-1h16v1zm0-4.77v-1h16v1zm0-4.77v-1h16v1z" strokeWidth="0.5" stroke="#f05a22" /></svg>
                        <select id="brand" onChange={(e) => setCat(e.target.value)} className='appearance-none outline-none cursor-pointer' >
                            <option hidden>Select Your Brand</option>
                            <option value={"all"}>All</option>
                            <option value={"Clothing"}>Clothing</option>
                            <option value={"Lingerie"}>Lingerie</option>
                            <option value={"Sportswear"}>Sportswear</option>
                            <option value={"Footwear"}>Footwear</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-center gap-4.5 flex-wrap px-10">
                    {filteredData.map((e, i) => (
                        <Card key={i} id={e.id} img={e.img} name={e.name} />
                    ))}
                </div>
            </div>
        </>
    )
}
