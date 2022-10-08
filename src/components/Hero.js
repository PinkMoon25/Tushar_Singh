import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMediumM, FaAngellist } from "react-icons/fa"
import pic from "../img/profile1.jpg"
import background from '../img/soundwave.svg'
const Hero = () => {
  return (
    <section className="hero" style={
      {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "95% 0"
      }
    }>
      <ul className="social-links">
        <li><a><FaGithub /></a></li>
        <li><a><FaLinkedin /></a></li>
        <li><a><FaTwitter /></a></li>
        <li><a><FaMediumM /></a></li>
        <li><a><FaAngellist /></a></li>
      </ul>
      <img src={pic} className="pic"/>
      <div className="intro">
        <h1>Hey, I am Tushar</h1>
        <h2>A Passionate Software Developer from India</h2>
        <p>I can help you build a product, feature or website.<br/> 
          Look through some of my work and experience!<br/> 
          If you like what you see and have a project you need coded,<br/>
          don't hestiate to <a>contact me</a>.
        </p>
      </div>
    </section>
  )
};

export default Hero
