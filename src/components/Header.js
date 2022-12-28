import React, { useState } from "react";
import { ImMenu, ImCross } from "react-icons/im";

const Header = ()=>{
  const [ mobileMenu, setMobileMenu ] = useState(false)
  
  const handleClick = () => {
    if(!mobileMenu){
      setMobileMenu(!mobileMenu)
    }
    else setMobileMenu(!mobileMenu)
  }

  return (
    <header>
      <h1 className="name-logo"><a href="#home">Tushar</a></h1>
      <nav>
        <a href="#home" className="navlinks">Home</a>
        <a href="#portfolio" className="navlinks">Portfolio</a>
        <a href="#contact" className="navlinks">Contact</a>
        <a href="#about" className="navlinks">About</a>
      </nav>
      <nav className="mobile-nav">
        <button className="menu-icon" onClick={handleClick}><ImMenu /></button>
        <div className={`mobile-nav-container ${mobileMenu ? null : 'hide-nav'}`}>
          <button onClick={handleClick}><ImCross /></button>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={handleClick} className="navlinks">Home</a></li>
            <li><a href="#portfolio" onClick={handleClick} className="navlinks">Portfolio</a></li>
            <li><a href="#contact" onClick={handleClick} className="navlinks">Contact</a></li>
            <li><a href="#about" onClick={handleClick} className="navlinks">About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
