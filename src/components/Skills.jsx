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
                    <li>UI/UX Fundamentals</li>
                    <li>Responsive & Adaptive Layouts</li>
                    <li>Wireframing & Prototyping (Figma)</li>
                    <li>Mobile-first & Accessibility-aware Design</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Frontend</h3>
                    <ul>
                    <li>HTML5 / CSS3 / SCSS</li>
                    <li>JavaScript (ES6+)</li>
                    <li>React (Hooks, Router, SPA logic)</li>
                    <li>Bootstrap</li>
                    <li>DOM Manipulation, Fetch API, AJAX</li>
                    <li>Basic Animation (CSS, keyframes, hover effects)</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Backend</h3>
                    <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>RESTful APIs</li>
                    <li>NoSQL (MongoDB / Mongoose)</li>
                    <li>SQL (MySQL)</li>
                    <li>Session & Authentication basics</li>
                </ul>
                </div>
                <div className="skill-group">
                    <h3>Tools & Workflow</h3>
                    <ul>
                        <li>Git, GitHub</li>
                        <li>Postman</li>
                        <li>VS Code / WebStorm</li>
                        <li>Netlify / Vercel</li>
                        <li>npm, Vite</li>
                    </ul>
                </div>
                <div className="skill-group">
                    <h3>Soft Skills</h3>
                    <ul>
                    <li>Teamwork & Collaboration</li>
                    <li>Time management</li>
                    <li>Problem-solving</li>
                    <li>Communication</li>
                    <li>Attention to detail</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skills