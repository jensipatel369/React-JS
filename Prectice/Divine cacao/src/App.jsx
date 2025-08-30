import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Trending from "./Components/Trending";
import Gift from "./Components/Gift";
import Menu from "./Components/Menu";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Trending/>
      <Gift/>
      <Menu/>
      <Customers/>
      <Footer/>
    </div>
  );
}
