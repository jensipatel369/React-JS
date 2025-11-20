import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Deshboard from './components/Deshboard'
import Register from './components/Register'
import Login from './components/Login'
import Cart from './pages/Cart'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/deshboard' Component={Deshboard}></Route>
          <Route path='/cart' Component={Cart}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
