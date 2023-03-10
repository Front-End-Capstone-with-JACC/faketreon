
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { IoLogoFacebook, IoAirplaneSharp, IoAccessibilitySharp } from "react-icons/io5";
import { MenuItems } from "./MenuItems"
import "./Navbar.css"
import { useState } from 'react';

const Navbar = () => {
  return (
<div>

    <nav className="NavbarItems">

      <h1 className="navbar-logo">
        
        <Link to="/">
          <svg height="79.83496848435058" className='css-1j8o68f' viewBox="-5 0 79.2062113951638 79.83496848435058" width="79.2062113951638"><defs id="SvgjsDefs1762"><linearGradient id="SvgjsLinearGradient1767"><stop id="SvgjsStop1768" stopColor="#00ddff" offset="0"></stop><stop id="SvgjsStop1769" stopColor="#ff00d4" offset="1"></stop></linearGradient></defs><g id="SvgjsG1763" featurekey="FRM3ZD-0" transform="matrix(5.508457183837891,0,0,5.508457183837891,-14.195267963964659,-30.470234391760762)" fill="url(#SvgjsLinearGradient1767)"><path d="M17.607 10.9648 l-13.59 0 l0 2.1824 l9.0599 0 l0 2.3476 l-9.0599 0 l0 4.5299 l-2.3477 0 l0 -11.407 l15.938 0 l0 2.3476 z"></path></g></svg>
        </Link>

      </h1>

      <div className='menu-icon'>

      <ul className='nav-menu'>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
    </nav>

    <Outlet />
    
</div>
  )
}

export default Navbar