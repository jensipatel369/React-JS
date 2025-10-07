import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/about:name' Component={About}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
