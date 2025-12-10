import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Login from './components/Login'
import Register from './components/Register'
import Deskboard from './components/Deskboard'
import CRUD from './components/CRUD'

export default function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/deskboard" element={<Deskboard />} />
            <Route path="/crud" element={<CRUD />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  ) 
}
