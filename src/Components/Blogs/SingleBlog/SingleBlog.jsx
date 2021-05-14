import React from 'react'
import {FaArrowRight} from 'react-icons/fa';
import './SingleBlog.css';
const SingleBlog = ({item}) => {
    return (
        <>
             
            <a style={{textDecoration:'none'}} target='_blank' rel="noreferrer" href={item.href}>
                <div className="single-js-post">
                    <div className="title-box">
                        <h5>{item.title}</h5>
                    </div>
                    <div className="card-info">
                        <h1>{item.title}</h1>
                        <h6>{item.badge}</h6>
                        <hr/>
                        <p>{item.desc.substr(0,110)}.</p>
                        <div className="continue-reading">
                        <button>Continue Reading <FaArrowRight className='arrow' /></button>
                        </div>
                        <div className="flex-recent">
                        <h5>{item.date}</h5>
                        <h5>Read {item.time}</h5>
                    </div>
                    </div>
                </div> 

            </a>
        </>
    )
}

export default SingleBlog