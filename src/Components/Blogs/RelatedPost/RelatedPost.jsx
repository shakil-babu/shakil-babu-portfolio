import React from 'react'
import { Link } from 'react-router-dom';
import { posts } from '../../../utilities/blogsInfo'
import './RelatedPost.css';
const RelatedPost = ({ID}) => {
    const filtered = posts?.filter(item => item.id !== ID);
    return (
        <>
          <div className="related-post-area">
                <div className="d-flex-me">
                    <div className="under-line"></div>
                    <h5>Related</h5>
                    <div className="under-line"></div>
                </div>

                {
                   <div className="realted">
                         {
                             filtered.map(item => {
                                 return(
                                    <Link style={{textDecoration:'none'}} to={`/blogs/${item.id}`}>
                                    <div className="recent-area-post">
                                        <h6 style={{fontSize:'15px !important', color:'white'}}>{item.title}</h6>
                                        <div className="flex-recent">
                                            <h5>{item.date}</h5>
                                            <h5>Read {item.time}</h5>
                                        </div>
                                    </div>  
                                    </Link>
                                 )
                             })
                         }
                  </div>
                }
            </div>      
        </>
    )
}

export default RelatedPost
