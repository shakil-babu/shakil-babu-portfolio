import React from 'react'
import {FaFacebookSquare, FaInstagramSquare , FaGithubSquare, FaLinkedin} from 'react-icons/fa';
import './AboutIntro.css';
import img from '../../../utilities/images/me.jpg';
const AboutIntro = () => {
    return (
        <>
            <section className="about-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>About Me</h5>
                    <div className="under-line"></div>
                </div>
                <img src={img} alt=""/>
                <p>Hey dude, This is Shakil Babu who wanna make something good. I am a JavaScript Developer also love to C++.</p>

                <div className="social-flex">
                    <a href='https://www.facebook.com/profile.php?id=100025305922873' target='_blank'> <FaFacebookSquare className='Icon' /> </a>
                    <a href='https://www.instagram.com/shakilbabupro/' target='_blank'> <FaInstagramSquare className='Icon' /> </a>
                    <a href='https://github.com/shakil-Babu/' target='_blank'> <FaGithubSquare className='Icon' /> </a>
                    <a href='https://www.linkedin.com/in/shakil-babu-b1a144211/' target='_blank'> <FaLinkedin className='Icon' /> </a>
                </div>
            </section>    
        </>
    )
}

export default AboutIntro
