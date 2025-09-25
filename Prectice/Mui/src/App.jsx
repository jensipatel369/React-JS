import React from 'react'
import Nav from './Components/Nav'
import Swiper from './Components/Swiper'
import Card from './Components/Card'
import Footer from './Components/Footer'
import Collapes from './Components/Collapes'
import List from './Components/List'
import Form from './Components/Form'

export default function App() {
  return (
    <div>
      <Nav/>
      <Swiper/>
      <Card/>
      {/* <Swiper/>
      <Card/> */}
      <Form/>
      <List/>
      <Collapes/>
      <Footer/>
    </div>
  )
}
