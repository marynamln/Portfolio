import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './App.scss'

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
