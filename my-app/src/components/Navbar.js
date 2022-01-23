/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

import React from 'react'
import reactLogo from '../logo512.png'

export default function Navbar(){
    return (
        <nav className='navbar'>
            <section className='navbar-first-section'>
                <img src= {reactLogo} />
                <h2>ReactFacts</h2>
            </section>
            <h3>React Course - Project 1</h3>
        </nav>
    )
}