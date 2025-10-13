import React from 'react'
import Cards from '../components/Cards'

export default function Home() {
    const product = [
        {
            id : 1,
            img : "1.jpg",
            title : "Vanilla Cake",
            price : "775",
            rate : "4.8",
            reviews : "( 918 Reviews )",
            time : "Tomorrow"
        },
        {
            id : 2,
            img : "2.jpg",
            title : "Vanilla Cake",
            price : "775",
            rate : "4.8",
            reviews : "( 918 Reviews )",
            time : "Tomorrow"
        },
    ]    

    localStorage.setItem("products",JSON.stringify(product))

  return (
    <>
        {
            product.map((e,i)=>{
                return <Cards key={i} id={e.id} img={e.img} title={e.title} price={e.price} rate={e.rate} reviews={e.reviews} time={e.time} />
            })
        }
    </>
  )
}
