import React from 'react'
import './Header.css';
import personal from '../../utilities/images/sh.png';
import Navbar from '../Navbar/Navbar';
import resume from '../../utilities/images/resume.pdf'
import { BsDownload} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <section className="header-area">
                <Navbar isBg={false}/>
                <div className="container">
                    <div className="header-flex">
                        <div className="header-info">
                            <h6>Welcome to my World</h6>
                            <h1>Hello I’m <br/> Shakil Babu</h1>
                            <p>A MERN Stack developer(Jr.) who have  more  than 2 years of learning experience  building  and  testing applications for Web using JavaScript, node.js, express.js, mongodb, react.js and gatsbyjs.</p>
                            <div className="btn-flex">
                            <a href={resume} download="resume" className='width'>
                            <button className="btn"> <BsDownload/> Dowenload Resume</button>
                            </a>
                               <Link className='width' to='/contact' style={{textDecoration:"none"}} > <button className="btn">Hire me</button></Link>
                            </div>
                        </div>
                        <div className="header-img">
                            <img src={personal} alt="personal"/>
                        </div>
                    </div>
                </div>
                <div className="side-bg"></div>
            </section>   
        </>
    )
}

export default Header
