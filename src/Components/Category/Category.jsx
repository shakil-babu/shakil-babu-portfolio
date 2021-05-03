import React from 'react'
import { Link } from 'react-router-dom';
import './Category.css';
const Category = ({item}) => {
    return (
        <>
            <Link className='category-link' to={item.path}>
            <div className="categroy-area">
                <img src={item.img} alt="img"/>
                <h4>{item.title}</h4>
            </div>
            </Link>
        </>
    )
}

export default Category
