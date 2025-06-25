import { useState } from 'react'
import '../App.scss'
import photo from '/assets/photo.JPG'

function About() {

  return (
    <>
      <section id="about" className='about'>
        <div className='about-tx'>
            <h1>Maryna Melnyk</h1>
            <h3>Front End Developer (junior)</h3>
            <p className='about-descript'>I am a 4th year Software Engineering student at the National University of Kyiv-Mohyla Academy, focusing on front-end web development. I enjoy creating clean, responsive, and accessible user interfaces, and I constantly strive to improve both my technical and design skills.</p>
            <p className='about-descript'>I have hands-on experience with React, SCSS, and RESTful APIs, and I pay special attention to usability and layout quality. I'm looking to become part of a friendly and professional team where I can grow as a developer, contribute to meaningful projects, and learn from others.</p>
        </div>
        <div className='about-photo'>
            <img className='photo' src={photo} />
        </div>
      </section>
    </>
  )
}

export default About
