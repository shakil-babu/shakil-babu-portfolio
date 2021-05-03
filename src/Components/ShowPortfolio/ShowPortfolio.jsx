import React from 'react'
import { Link } from 'react-router-dom';
import { projectForHome } from '../../utilities/projectInfo';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import './ShowPortfolio.css';
const ShowPortfolio = () => {
    return (
        <>
            <div className="show-portfolio-area">
                <div className="container">
                    <div className="service-box-area">
                        <h1>Portfolio</h1>
                        <p>Here are some of my work. For more project click the button below.</p>
                        <div className="underline1"></div>
                     </div> 

                     <div className="show-project-grid-layout">
                         {
                             projectForHome.map((item) => <ProjectDetails info={item}/> )
                         }
                     </div>

                     <Link to='/portfolio' className='gotoportfolio'> <button>Go to Portfolio</button> </Link>
                </div>
            </div>   
        </>
    )
}

export default ShowPortfolio
