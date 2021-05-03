import React from 'react'
import './ProjectDetails.css';
import {FaPaperPlane} from 'react-icons/fa';
import {GoProject} from 'react-icons/go';
import { Link } from 'react-router-dom';
const ProjectDetails = ({info}) => {
    return (
        <>
            <div className="project-details-area">
                <img src={info.img} alt=""/>
                <h6>{info.type}</h6>
                <div className="single-project-info">
                    <h5>{info.title}</h5>
                    <div className="category-flex">
                        {info.category.map((item) => {
                            return (<div>
                                <button>{item}</button>
                            </div>)
                        })}
                    </div>

                    <div className="source">
                        <Link to={`/portfolio/details/${info.id}`} style={{textDecoration:'none'}} ><a><GoProject className='icon'/> Details</a></Link>
                        <a href={info.live} target='_blank' ><FaPaperPlane className='icon'/> Preview</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails
