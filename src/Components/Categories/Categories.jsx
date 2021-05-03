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
                </div>
            </section> 
        </>
    )
}

export default Categories
