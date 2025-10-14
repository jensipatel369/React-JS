import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Cart from './pages/Cart'
import Customer from './components/Customer'
import Oreder from './components/Oreder'
import Blog from './components/Blog'
import Quick from './components/Quick'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </BrowserRouter>
      <Customer/>
      <Oreder/>
      <Blog/>
      <Quick/>
      <Footer/>
    </>
  )
}
