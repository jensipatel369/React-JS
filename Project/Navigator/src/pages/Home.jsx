import React from 'react'
import Cards from '../components/Cards'

export default function Home() {
    const products = [
        {
            id: 1,
            img: "1.jpg",
            title: "Classic Black Forest Cake",
            price: "495",
            rate: "4.8",
            reviews: "( 918 Reviews )",
            time: "Tomorrow"
        },
        {
            id: 2,
            img: "2.jpg",
            title: "Black Forest Heart Shape Cake",
            price: "635",
            rate: "4.9",
            reviews: "( 70 Reviews )",
            time: "in 3 hours"
        },
        {
            id: 3,
            img: "3.jpg",
            title: "Beautiful Floral Blackforest Pearl Cake",
            price: "635",
            rate: "5.0",
            reviews: "( 5 Reviews )",
            time: "Today"
        },
        {
            id: 4,
            img: "4.jpg",
            title: "Black Forest Anniversary Drip Cake",
            price: "635",
            rate: "4.0",
            time: "Today"
        },
        {
            id: 5,
            img: "5.png",
            title: "Cherry Black Forest Delight",
            price: "645",
            rate: "4.5",
            reviews: "( 151 Reviews )",
            time: "in 3 hours"
        },
        {
            id: 6,
            img: "6.jpg",
            title: "Love Struck Black Forest Pinata Cake",
            price: "1395",
            rate: "4.9",
            reviews: "",
            time: "Tomorrow"
        },
        {
            id: 7,
            img: "7.jpg",
            title: "Cherry Topped Black Forest Cake",
            price: "649",
            rate: "4.7",
            reviews: "( 147 Reviews )",
            time: "in 3 hours"
        },
        {
            id: 8,
            img: "8.jpg",
            title: "Black Forest Message Cake",
            price: "495",
            rate: "4.9",
            reviews: "( 302 Reviews )",
            time: "in 3 hours"
        },
        {
            id: 9,
            img: "9.jpg",
            title: "Choco Dipped Cherries Black Forest Cake",
            price: "735",
            rate: "4.8",
            reviews: "( 24 Reviews )",
            time: "Today"
        },
        {
            id: 10,
            img: "10.jpg",
            title: "Hearts Topped Black Forest Cake",
            price: "725",
            rate: "5.0",
            reviews: "( 4 Reviews )",
            time: "in 3 hours"
        },
        {
            id: 11,
            img: "11.jpg",
            title: "Heartfelt Black Forest Cake",
            price: "685",
            rate: "4.9",
            reviews: "( 60 Reviews )",
            time: "Today"
        },
        {
            id: 12,
            img: "12.jpg",
            title: "Black Forest Cake",
            price: "545",
            rate: "4.8",
            reviews: "( 15 Reviews )",
            time: "Tomorrow"
        },
        {
            id: 13,
            img: "13.jpg",
            title: "Classic Black Forest Cake",
            price: "495",
            rate: "4.8",
            reviews: "( 918 Reviews )",
            time: "Tomorrow"
        },
        {
            id: 14,
            img: "14.jpg",
            title: "Choco Dipped Cherries Black Forest",
            price: "735",
            rate: "4.8",
            reviews: "( 24 Reviews )",
            time: "In 3 hours"
        },
        {
            id: 15,
            img: "15.jpg",
            title: "Hearts Topped Black Forest Cake",
            price: "725",
            rate: "5.0",
            reviews: "( 4 Reviews )",
            time: "Today"
        }
    ]

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, []);

    return (
        <div className='bg-gray-50 pt-5'>
            <div className='bg-white mx-20 rounded-3xl'>
                <h1 className='text-center py-5 text-2xl font-semibold'>List of Cake</h1>
                <div className='w-full justify-center flex flex-wrap gap-8 pb-8'>
                    {
                        products.map((e, i) => {
                            return <Cards key={i} id={e.id} img={e.img} title={e.title} price={e.price} rate={e.rate} reviews={e.reviews} time={e.time} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
