import React from 'react'
import { useHistory, useParams } from 'react-router'
import './PortfolioDetails.css';
import Navbar from '../../../Components/Navbar/Navbar';
import { allProject } from '../../../utilities/projectInfo';
import { BsArrowLeft, BsDownload } from 'react-icons/bs';
import {FaPaperPlane} from 'react-icons/fa';

const PortFolioDetails = () => {
    const {postId} = useParams();
    const findProject = allProject.find((project) => project.id === postId);


    const {id, title, category, img, sourceCode, live, type, desc, firebase, tech, sc2} = findProject ;

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


                    <div className="portfolio-flex-layout">
                        <div className="details-info">
                        <h3>TYPE: {type}</h3>
                            <div className="info-item">
                                {
                                    desc.map((item) => <li>{item}.</li>)
                                }
                            </div>

                            {
                                firebase && (
                                    <>
                                    <h3>Firebase: </h3>
                                    <div className="firebase-option">
                                        {
                                            firebase.map(item => <li>{item}.</li>)
                                        }
                                    </div>
                                    </>
                                )
                            }
                            

                            {
                                sc2 ? (
                                        <div className="btn-flex">
                                            <a className='btn-dowenload'  href={live} target='_blank' rel='norefferel' > <FaPaperPlane className='icon'/> Preview</a>
                                            <a className='btn-dowenload'  href={sourceCode} target='_blank' rel='norefferel' > <BsDownload className='icon'/>client code</a>
                                            <a className='btn-dowenload'  href={sc2} target='_blank' rel='norefferel' > <BsDownload className='icon'/>server code</a>
                                        </div>
                                ):(
                                    <div className="btn-flex">
                                        <a className='btn-dowenload'  href={live} target='_blank' rel='norefferel' > <FaPaperPlane className='icon'/> Preview</a>
                                        <a className='btn-dowenload'  href={sourceCode} target='_blank' rel='norefferel' > <BsDownload className='icon'/>Source code</a>
                                    </div>
                                )
                            }
                        </div>

                        <div className="technology-area">
                            <h3>Technology Used:</h3>
                            <div className="tech">
                                {
                                    tech.map((item) => <button>{item}</button> )
                                }
                            </div>
                        </div>
                    </div>


                  </div>
                </div>
            </section>   
        </>
    )
}

export default PortFolioDetails
