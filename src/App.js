import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import Navbar from './navbar'
import Authenticate from './authenticate'
import Home from './home'
import AboutUs from './about-us'
import Products from './products'
import Gallery from './gallery'
import Contact from './contact'
import Checkout from './checkout'
import Footer from './footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
