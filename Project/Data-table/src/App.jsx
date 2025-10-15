import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Grocery from './Components/Grocery'
import Jewellery from './Components/Jewellery'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Grocery/>
      <Jewellery/>
      <Footer/>
    </>
  )
}
