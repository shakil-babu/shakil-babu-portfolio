import React from 'react'
import SingleBlog from '../../Components/Blogs/SingleBlog/SingleBlog';
import Navbar from '../../Components/Navbar/Navbar';
import { posts } from '../../utilities/blogsInfo';
import './BlogsPage.css';
const BlogsPage = (props) => {
    return (
        <>
        <Navbar isBg={true} />
            <section className="blogs-page-area">
                <div className="container">
                    <div className="location-area">
                        <h1>Home {props.location.pathname}</h1>
                    </div>

                    <div className="home-blogs-grid">
                         {
                             posts.map((item) => <SingleBlog item={item} /> )
                         }
                     </div>
                </div>

                   
            </section>   
        </>
    )
}

export default BlogsPage
