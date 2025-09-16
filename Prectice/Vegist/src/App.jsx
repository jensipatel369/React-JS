import React from 'react'
import Nav from './Components/Nav'
import MiniNav from './Components/MiniNav'
import Hero from './Components/Hero'
import Off from './Components/Off'
import Catogory from './Components/Catogory'
import TrendingProduct from './Components/TrendingProduct'
import Collection from './Components/Collection'
import OurProduct from './Components/OurProduct'
import Says from './Components/Says'
import News from './Components/News'
import Deal from './Components/Deal'

export default function App() {
  return (
    <>
      <MiniNav/>
      <Nav/>
      <Hero/>
      <Off/>
      <Catogory/>
      <TrendingProduct/>
      <Collection/>
      <OurProduct/>
      <Says/>
      <News/>
      <Deal/>
    </>
  )
}
