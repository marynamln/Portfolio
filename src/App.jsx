import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import './App.scss'

function App() {

  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </>
  )
}

export default App
