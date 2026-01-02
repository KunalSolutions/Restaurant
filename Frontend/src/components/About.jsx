import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

function About() {
  return (
    <section className='about' id='about'>
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className='heading'> ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rerum excepturi aut, deserunt cupiditate voluptatibus exercitationem? Ipsam, cum. Neque perspiciatis ut error ipsum deserunt aperiam in beatae repellat, expedita eaque!
                </p>
                <Link to={'/'}>Explore Menu 
                <span>
                    <HiOutlineArrowNarrowRight />    
                </span>
                </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>  
  )
}

export default About