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
      <h1>Tushar</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </nav>
      <nav className="mobile-nav">
        <button className="menu-icon" onClick={handleClick}><ImMenu /></button>
        <div className={`mobile-nav-container ${mobileMenu ? null : 'hide-nav'}`}>
          <button onClick={handleClick}><ImCross /></button>
          <ul className="mobile-nav-links">
            <li><a href="#home" onClick={handleClick}>Home</a></li>
            <li><a href="#portfolio" onClick={handleClick}>Portfolio</a></li>
            <li><a href="#contact" onClick={handleClick}>Contact</a></li>
            <li><a href="#about" onClick={handleClick}>About</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
