import React from 'react'
import Nav from './Components/Nav'
import Catalog from './Components/Catalog'
import Shop from './Components/Shop'
import Today from './Components/Today'
import Testimonial from './Components/Testimonial'
import Best from './Components/Best'
import Lastbg from './Components/Lastbg'
import Blog from './Components/blog'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div>
      <Nav/>
      <Catalog/>
      <Shop/>
      <Today/>
      <Testimonial/>
      <Best/>
      <Lastbg/>
      <Blog/>
      <Footer/>
    </div>
  )
}
