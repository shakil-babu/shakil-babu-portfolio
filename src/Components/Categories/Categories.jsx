import React from 'react'
import './Categories.css';
import {categoryInfo} from '../../utilities/categoryInfo';
import Category from '../Category/Category';
const Categories = () => {
    return (
        <>
            <section className="categories-area">
                <div className="container">
                    <div className="service-box-area">
                        <h1>Categories</h1>
                        <p>Click and see Projects.</p>
                        <div className="underline1"></div>
                     </div> 
                    <div className="categories-layout">
                         {
                            categoryInfo.map((item) => <Category item={item}/>) 
                         }
                    </div>
                    <div className="more-btn-area">
                    <a href="https://github.com/shakil-babu/" rel="noreferrer" className='btn btn-more'>For more projecets</a>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Categories
