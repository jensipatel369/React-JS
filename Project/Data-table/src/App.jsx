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
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/nav' Component={Nav}></Route>
        <Route path='/grocery' Component={Grocery}></Route>
        <Route path='/jewellery' Component={Jewellery}></Route>
        <Route path='/footer' Component={Footer}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}
