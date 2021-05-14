import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import me from  '../../utilities/images/mee.png';
import resume from '../../utilities/images/resume.pdf'
import {BsDownload} from 'react-icons/bs';
import './About.css';
import Skills from '../../Components/Skills/Skills';
const About = () => {
    return (
        <>
        <Navbar isBg={true}/>
            <section className="about-area-page">
                <div className="container">
                    <div className="about-flex">
                        <div className="img-area-about">
                            <img src={me} alt="me"/>
                        </div>
                        <div className="info-area">
                            <h4>I'm</h4>
                            <h1>Shakil Babu</h1>
                            <p>I am a JavaScript developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React.js, Node.js, Express.js, and mongoDB. I always focus on learning new technology. </p>
                            <a href={resume} download="resume" className='width'>
                            <button className="btn btn-bg"> <BsDownload/> Dowenload Resume</button>
                            </a>
                        </div>
                    </div>

                    
                </div>
                <Skills/>
            </section>   
        </>
    )
}

export default About
