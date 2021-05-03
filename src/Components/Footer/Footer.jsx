import React, {useState, useEffect} from 'react';
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
    const [date , setDate] = useState();
    const getYear = () =>  setDate(new Date().getFullYear());

    useEffect(() => {
        getYear();
    }, [])
    return (
        <>
            <footer className="footer-area">
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100025305922873" target='_blank'><FaFacebook className='icon1'/></a>
                    <a href="https://www.instagram.com/shakilbabupro/" target='_blank'><FaInstagram className='icon2'/></a>
                    <a href="https://github.com/shakil-Babu/" target='_blank'><FaGithub className='icon3'/></a>
                    <a href="https://www.linkedin.com/in/shakil-babu-b1a144211/" target='_blank'><FaLinkedin className='icon4'/></a>
                </div>
                <p>Copyright © {date} - Shakil Babu</p>
            </footer>   
        </>
    )
}

export default Footer
