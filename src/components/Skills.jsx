import { useState } from 'react'
import '../App.scss'

function Skills() {

  return (
    <>
        <section id="skills" className='skills'>
            <h1>Skills</h1>
            <div className="skills-section">
                <div className="skill-group">
                    <h3>Web Design</h3>
                    <ul>
                    <li>UI/UX Basics</li>
                    <li>Responsive Layouts</li>
                    <li>Wireframing (Figma)</li>
                    <li>Mobile-first Design</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Frontend</h3>
                    <ul>
                    <li>HTML5 / CSS3 / SCSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>ReactJS (Hooks, Router)</li>
                    <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Backend</h3>
                    <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>NoSQL (MongoDB / Mongoose)</li>
                    <li>SQL (MySQL)</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Soft Skills</h3>
                    <ul>
                    <li>Teamwork</li>
                    <li>Time management</li>
                    <li>Problem-solving</li>
                    <li>Communication</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills