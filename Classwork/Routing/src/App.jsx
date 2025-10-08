import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Read from './components/CRUD/Read'
import Add from './components/CRUD/Add'

export default function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' Component={Read}></Route>
          <Route path='/add' Component={Add}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
