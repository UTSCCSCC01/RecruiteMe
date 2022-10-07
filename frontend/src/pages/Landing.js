import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Landing/Header'
import About from '../components/Landing/About'
import ContactUs from '../components/Landing/ContactUs'
import Footer from '../components/Footer'
function Landing() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Landing