import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import InstaPage from './components/InstaPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/insta-page' element={<InstaPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
