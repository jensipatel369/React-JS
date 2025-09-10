import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Catagories from './Components/Catagories'
import Products from './Components/Products'
import Join from './Components/Join'
import News from './Components/News'
import About from './Components/About'
import Footer from './Components/Footer'

export default function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Catagories/>
      <Products/>
      <Join/>
      <News/>
      <About/>
      <Footer/>
    </div>
  )
}
