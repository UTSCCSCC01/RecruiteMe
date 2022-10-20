import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Landing/Header'
import About from '../components/Landing/About'
import ContactUs from '../components/Landing/ContactUs'
import Footer from '../components/Footer'
import { sectionsType } from '../components/Dashboard/NavSections'
function Landing() {
  return (
    <div>
      <Navbar type={"landing"} sections={sectionsType[0]}/>
      <Header/>
      <About/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Landing