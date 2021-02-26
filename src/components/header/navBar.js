import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';
import { navBarData } from './navBarElements';

const Navbar = ({toggle}) => {
  return (
    <>
      <IconContext.Provider value={{color: '#000'}}>
        <nav className="menu">
          <div className="nav-container">
            <div className="nav-logo">
              <img alt="logo" className="img-fluid" src={Logo}/>
            </div>
            <span className="mobile-icon" >
              <FaBars onClick={toggle} />
            </span>
            <ul className="nav-menu">
              {navBarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path} className="nav-link">
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
