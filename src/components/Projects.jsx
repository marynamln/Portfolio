import { useState, useEffect } from 'react'
import '../App.scss'
import projectsData from '../data/projects.json'
import ProjectItem from './ProjectItem';

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
    <>
        <section id="projects" className='projects'>
            <h1>Projects</h1>
            <div className='pr-items'>
                {projects.map((item, index) => (
                    <ProjectItem key={index} item={item} />
                ))}
            </div>
        </section>
    </>
    )
}

export default Projects