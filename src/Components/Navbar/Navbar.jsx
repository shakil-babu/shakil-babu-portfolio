import React, { useState } from 'react'
import './Navbar.css';
import {NavLink, Link} from 'react-router-dom';
import {AiOutlineAlignRight} from 'react-icons/ai';
import {GiCrossMark} from 'react-icons/gi';
const Navbar = ({isBg}) => {
  const [isBar, setBar] = useState(false);
  const activeDesign = {
    borderLeft:'5px solid #682de9',
    padding:'0px 5px'
  }
  const another = {
    borderTop:'2px solid #fff'
  }
  return (
    <>
        <nav className={isBg ? 'nav-area nav-bg':'nav-area'}>
          <div className="container">
              <div className="nav-flex">
                <Link className='nav-item-wrapper' to='/'>
                  <div className={isBg ? 'nav-logo-area black': 'nav-logo-area light'}>
                      <div className="underline"></div>
                      <h4>Shakil Babu</h4>
                      <div className="underline"></div>
                  </div>
                </Link>
                <div className="bar-area" onClick={() => setBar(!isBar)}>
                   {
                     isBar ? <GiCrossMark className={isBg ? 'bar': 'light-bar'} /> : <AiOutlineAlignRight className={isBg ? 'bar': 'light-bar'} />
                   }
                </div>
                <div className="nav-items">
                    <NavLink exact activeStyle={activeDesign} className='nav-link' to='/'>Home</NavLink>
                    <NavLink activeStyle={activeDesign} className='nav-link' to='/about'>About</NavLink>
                    <NavLink activeStyle={activeDesign} className='nav-link' to='/portfolio'>Portfolio</NavLink>
                    <NavLink activeStyle={activeDesign} className='nav-link' to='/blogs'>Blogs</NavLink>
                    <NavLink activeStyle={activeDesign} className='nav-link' to='/contact'>Contact</NavLink>
                </div>
              </div>

              {
                isBar && (
                    <div className="mobile-nav">
                      <NavLink exact activeStyle={another} exact className='nav-link' to='/'>Home</NavLink>
                      <NavLink activeStyle={another} className='nav-link' to='/about'>About</NavLink>
                      <NavLink activeStyle={another} className='nav-link' to='/portfolio'>Portfolio</NavLink>
                      <NavLink activeStyle={another} className='nav-link' to='/blogs'>Blogs</NavLink>
                      <NavLink activeStyle={another} className='nav-link' to='/contact'>Contact</NavLink>
                    </div>
                )
              }
          </div>
        </nav>
    </>
  )
}

export default Navbar
