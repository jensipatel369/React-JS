import React from 'react'
import Card from '../Components/Card'
import MiniCard from '../Components/Minicard'

export default function Home() {
    let arr = [
        {
            image: "1.jpg",
            time: "Daily, 10:00 AM onwards",
            title: "Krishna Water Park & Resort",
            add: "Krishna Water Park & Resort, Rajkot",
            price: "₹600 onwards"
        },
        {
            image: "2.jpg",
            time: "20 Sep | 8:30PM - 1 Oct | 8:30PM",
            title: "Navraat Mandli Garba : A Premium Mandli Garba | Rajkot",
            add: "Vishwa Party Lawns & Banquet Hall, Rajkot",
            price: "₹999 onwards"
        },
        {
            image: "3.jpg",
            time: "Mon, 22 Sept - Tue, 7 Oct, Multiple slots",
            title: "Dandia Night 2025",
            add: "Just art & community center - kesar Dhaba,...",
            price: "₹200 onwards"
        }
    ]

    let arr2 = [
        {
            image: "4.jpg",
            title: "Jolly LLB 3",
            disc: "UA16+ | Hindi"
        },
        {
            image: "5.jpg",
            title: "Bachu Ni Benpani",
            disc: "UA13+ | Gujarati"
        },
        {
            image: "6.jpg",
            title: "Mirai",
            disc: "UA16+ | Hindi"
        },
        {
            image: "7.jpg",
            title: "Vash Level 2",
            disc: "A | Gujarati"
        }
    ]

    let arr3 = [
        {
            image: "8.jpg",
            time: "September 30 | 8:30PM - 2AM",
            title: "OffBeat Garba | Ahmedabad",
            add: "Anokhi Greens, Ahmedabad",
            price: "₹5000"
        },
        {
            image: "9.jpg",
            time: "Sun, 16 Nov, 7:00PM",
            title: "Akon India Tour 2025 | Mumbai",
            add: "Venue to be announced, Mumbai",
            price: "₹3499 onwards"
        },
        {
            image: "10.jpg",
            time: "Wed, 29 Oct, 6:30PM",
            title: "Enrique Lglesias Live in Concert - New Show",
            add: "MMRDA Grounds, Mumbai",
            price: "₹5000 onwards"
        },
        {
            image: "11.jpg",
            time: "Sun, 05 Oct, 7:00PM",
            title: "Eric Prydz India 2025 | Mumabi",
            add: "Dome SVP Stadium, Mumbai",
            price: "₹5500 onwards"
        },
        {
            image: "12.jpg",
            time: "22 Nov - 23 Nov, 3PM",
            title: "Rolling Loud India | Hip-Hop Festival | Karan Aujla, Central Cee",
            add: "Loud Park, Kharghar, Mumbai",
            price: "₹7000 onwards"
        },
        {
            image: "13.jpg",
            time: "Sun, 23 Nov, 5:00 PM",
            title: "A.R. Rahman Live in Pune",
            add: "Maharastra Cricket Association Stadium,...",
            price: "₹999 onwards"
        },
        {
            image: "14.jpg",
            time: "Sat, 06 Dec, 7:00 PM",
            title: "Sunidhi Chauhan I Am Home | Live in Pune",
            add: "Suryakant Kakade Farms, Pune",
            price: "₹1399 onwards"
        },
        {
            image: "15.jpg",
            time: "Sat, 04 Oct, 8:00 PM",
            title: "Papon | Shaam-E-Mehfil | Pune",
            add: "Mayfield Estate, Pune",
            price: "₹1499 onwards"
        },
        {
            image: "16.png",
            time: "Sat, 27 Sep, 6:00 PM",
            title: "Jalsa 9.0 - The Charity Dandiya Night",
            add: "Abhinav Public School, Delhi/NCR",
            price: "₹1299 onwards"
        },
        {
            image: "17.png",
            time: "Wed, 24 Sept onwards, Multiple Dates",
            title: "Kolkata Durga Puja 2025",
            add: "Sovabazar Rajbari, Kolkata",
            price: "₹39000"
        }
    ]

    let arr4 = [
        {
            image: "5.jpg",
            title: "Bachu Ni Benpani",
            disc: "UA13+ | Gujarati"
        },
        {
            image: "7.jpg",
            title: "Vash Leval 2",
            disc: "UA | Gujarati"
        },
        {
            image: "18.jpg",
            title: "Baaghi 4",
            disc: "A | Hindi"
        }
    ]

    return (
        <>
            <div className='week pt-20 sm:pt-24 lg:pt-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8 md:pb-10 text-gray-900'>Happening this week</h1>
                <div className='flex gap-4 sm:gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:overflow-x-visible'>
                    {
                        arr.map((e, i) => {
                            return <Card obj={e} key={i} />
                        })
                    }
                </div>
            </div>

            <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8 md:pb-10 text-gray-900'>Hits from previous weeks</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6'>
                    {
                        arr2.map((e, i) => {
                            return <MiniCard obj={e} key={i} />
                        })
                    }
                </div>
            </div>

            <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8 md:pb-10 text-gray-900'>India's Top Events</h1>
                <div className='overflow-x-auto pb-4'>
                    <div className='w-max'>
                        <div className='flex gap-4 sm:gap-6'>
                            {
                                arr3.map((e, i) => {
                                    return <Card obj={e} key={i} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pb-6 sm:pb-8 md:pb-10 text-gray-900'>Top Gujarati movies near you</h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6'>
                    {
                        arr4.map((e, i) => {
                            return <MiniCard obj={e} key={i} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
