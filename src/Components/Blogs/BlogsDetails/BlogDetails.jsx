import React from 'react'
import { posts } from '../../../utilities/blogsInfo';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useHistory, useParams } from 'react-router';
import './BlogDetails.css';
import AboutIntro from '../AboutIntro/AboutIntro';
import RelatedPost from '../RelatedPost/RelatedPost';
import Markdown from 'react-remarkable';
import Navbar from '../../Navbar/Navbar';
const BlogDetails = () => {
    let { id } = useParams();
    const FindPost = posts.find((item) => item.id === id);

    
    const history = useHistory();
    return (
        <>
        <Navbar isBg={true} />
            <section className="js-blogs-details-area">
                <div className="container">
                <button onClick={() => history.goBack()} className='back'>Back</button>

                {/* title */}
                <div className="js-post-title-area mt-4">
                    <h6>{FindPost.title}</h6>
                </div>
                {/* flex area */}
                <div className="js-post-ui-grid-layout mb-4">
                    <div className="js-post-details p-4">

                    <div className="flex-recent">
                        <h5>{FindPost.date}</h5>
                        <h5>Read {FindPost.time}</h5>
                    </div>
                <div className="underline-js-post">
                <h6>{FindPost.id}</h6>
                <div className="underline"></div>
                </div>
                    
                    <Markdown source = {FindPost.desc} />

                    {/* <SyntaxHighlighter language="javascript" style={dracula}>
                            {FindPost.c1}
                    </SyntaxHighlighter> */}

                    <div className="d-flex-me" style={{marginTop:'40px'}}>
                    <div className="under-line"></div>
                    <h5>End</h5>
                    <div className="under-line"></div>
                </div>

                </div>

                    <div className="about-category py-5 px-3">
                        <AboutIntro/>
                        <RelatedPost ID={FindPost.id}/>
                    </div>
                </div>
                </div>
            </section>   
        </>
    )
}

export default BlogDetails
