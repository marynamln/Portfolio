import { useState } from 'react'
import '../App.scss'
import photo from '/assets/photo.JPG'

function About() {

  return (
    <>
      <section id="about" className='about'>
        <div className='about-tx'>
            <h1>Maryna Melnyk</h1>
            <h3>Front End Developer</h3>
            <p className='about-descript'>I am a 4th year student at the National University of Kyiv-Mohyla Academy, majoring in software engineering. I am looking to become part of a friendly and professional team where I can develop my web development skills.</p>
            <button className='more-btn'>More</button>
        </div>
        <div className='about-photo'>
            <img className='photo' src={photo} />
        </div>
      </section>
    </>
  )
}

export default About
