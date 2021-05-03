import React from 'react'
import Header from '../../Components/Header/Header'
import './Home.css';
import Service from '../../Components/Service/Service';
import Skills from '../../Components/Skills/Skills';
import ShowPortfolio from '../../Components/ShowPortfolio/ShowPortfolio';
import Blogs from '../../Components/Blogs/Blogs';
const Home = () => {
    return (
        <>
            <section className="home-area">
                <Header/>
                <Service/>
                <Skills/>
                <ShowPortfolio/>
                <Blogs/>
            </section>   
        </>
    )
}

export default Home
