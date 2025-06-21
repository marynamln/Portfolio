import { useState, useEffect } from 'react'
import '../App.scss'

function Footer() {

    return (
    <>
        <footer className='footer'>
            <p>
                Developed by <a href='https://github.com/marynamln' target="_blank">Maryna Melnyk</a> © 2025
            </p>
            <p>Let’s build something great together — <a className='author-link' href="mailto:melnikm535@gmail.com">contact me</a>.</p>
        </footer>
    </>
    )
}

export default Footer