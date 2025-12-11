import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Deshboard from './components/Deshboard'
import ProductCard from './components/ProductCard'
import { Provider } from 'react-redux'
import { store } from './app/store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={Register}></Route>
            <Route path='/login' Component={Login}></Route>
            <Route path='/deshboard' Component={Deshboard}></Route>
            <Route path='/product-card' Component={ProductCard}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
