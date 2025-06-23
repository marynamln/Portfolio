import { useState } from 'react'
import '../App.scss'
import TechBadge from './TechBadge'

function ProjectItem({item}) {

  return (
    <>
        <div className='pr-item' onClick={() => window.open(item.github, '_blank', 'noopener,noreferrer')}>
            <div className='pr-ph-section'>
                <img className='pr-photo' src={item.image} />
            </div>

            <div className='pr-tx-section'>
                <h3>{item.title}</h3>
                <div className='pr-links'>
                    {item.demo && 
                        <a className='pr-link-demo' href={item.demo} target="_blank" onClick={(e) => e.stopPropagation()}>Live demo 🡥</a>
                    }
                    <a className='pr-link-demo' href={item.github} target="_blank" onClick={(e) => e.stopPropagation()}>GitHub 🡥</a>
                </div>
                    
                <p className='pr-description'>
                    {item.description}
                </p>
                <div className='pr-badges-section'>
                    {item.tech.map((tech, index) => (
                        <TechBadge key={index} badge={tech} />
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default ProjectItem