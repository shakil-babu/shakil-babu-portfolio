import React from 'react'
import { useHistory, useParams } from 'react-router'
import './PortfolioDetails.css';
import Navbar from '../../../Components/Navbar/Navbar';
import { allProject } from '../../../utilities/projectInfo';
import { BsArrowLeft, BsDownload } from 'react-icons/bs';
const PortFolioDetails = () => {
    const {postId} = useParams();
    const findProject = allProject.find((project) => project.id === postId);


    const {id, title, category, img, sourceCode, live, type} = findProject ;

    const history = useHistory();
    return (
        <>
        <Navbar isBg={true}/>
            <section className="portfolio-details-area">
                <div className="container">
                <button onClick={() => history.goBack()} className='back-btn' > <BsArrowLeft className='icon'/> Back</button>
                  
                  <div className="bg-shadow">
                        <div className="location-area">
                            <h3>{title}</h3>
                        </div>


                    <div className="details-info">
                    <a className='btn-dowenload'  href={sourceCode} target='_blank' > <BsDownload className='icon'/>Source code</a>

                        <h3>Details are still cooking....</h3>
                    </div>


                  </div>
                </div>
            </section>   
        </>
    )
}

export default PortFolioDetails
