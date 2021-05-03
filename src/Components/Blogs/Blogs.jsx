import React from 'react'
import { posts } from '../../utilities/blogsInfo';
import './Blogs.css';
import SingleBlog from './SingleBlog/SingleBlog';
const Blogs = () => {
    const threePost = posts.slice(0,3);
    return (
        <>
            <section className="blogs-area">
                <div className="container">
                    <div className="service-box-area">
                        <h1>Blogs</h1>
                        <p>Like to explain and write blogs for increase my exciting skill . </p>
                        <div className="underline1"></div>
                     </div> 

                     <div className="home-blogs-grid">
                         {
                             threePost.map((item) => <SingleBlog item={item} /> )
                         }
                     </div>
                </div>
            </section>   
        </>
    )
}

export default Blogs
