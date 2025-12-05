import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Deskboard from './components/Deskboard'
import TaskManager from './components/TaskManager'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Register}></Route>
          <Route path='/login' Component={Login}></Route>
          <Route path='/deskboard' Component={Deskboard}></Route>
          <Route path='/taskmanager' Component={TaskManager}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
