import React from 'react'
import Nav from './Nav'
import Cards from './Cards'
import Customer from './Customer'
import Oreder from './Oreder'
import Blog from './Blog'
import Quick from './Quick'
import Footer from './Footer'
import Cart from '../pages/Cart'
import Home from '../pages/Home'


export default function Deshboard() {
  return (
    <>
      <Nav/>
      <Home/>
      <Customer />
      <Oreder />
      <Blog />
      <Quick />
      <Footer />
    </>
  )
}

