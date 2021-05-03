import React from 'react'
import Categories from '../../Components/Categories/Categories';
import Navbar from '../../Components/Navbar/Navbar';
import './Portfolio.css';
const Portfolio = () => {
    return (
        <>
            <Navbar isBg={true} />
            <section className="portfolio-main-area">
                <div className="portfolio-bg">
                    <div className="info-portfolio">
                    <h1>Hey There,</h1>
                    <h2>Welcome to my Portfolio</h2>
                    <p>
                        Let's see some of projects.
                    </p>
                    </div>
                </div>
                <div className="ct">
                    <Categories/>
                </div>
            </section>   
        </>
    )
}

export default Portfolio
