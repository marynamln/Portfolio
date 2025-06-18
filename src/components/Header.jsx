import { useState } from 'react'
import '../App.scss'

function Header() {

  return (
    <>
      <nav className='nav-menu'>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contacts'>Contacts</a>
      </nav>
    </>
  )
}

export default Header
