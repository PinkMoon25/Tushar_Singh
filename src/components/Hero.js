import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMediumM, FaAngellist } from "react-icons/fa";
import pic from "../img/portfolio-profile.webp";
import background from '../img/soundwave.svg';

const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${background})` }}>
      <ul className="social-links">
        <li><a href="https://github.com/PinkMoon25" target='_blank' aria-label="Github"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/meet-tushar-singh/" target='_blank' aria-label="Linkedin"><FaLinkedin /></a></li>
        <li><a href="https://twitter.com/tushars90674484" target='_blank' aria-label="Twitter"><FaTwitter /></a></li>
        <li><a href="https://medium.com/@singhtushar348" target='_blank' aria-label="Medium"><FaMediumM /></a></li>
        <li><a href="https://angel.co/profile/edit/overview" target='_blank' aria-label="Angellist"><FaAngellist /></a></li>
      </ul>
      <img src={pic} alt='Image by pch.vector on Freepik' className="pic" />
      <div className="intro">
        <h1 style={{ fontSize: '2.5rem' }}>Hi, I am <span className="name">Tushar</span></h1>
        <h2>A Passionate Software Developer</h2>
        <p>I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don't hesitate to <a href="#contact"><strong><em>contact me</em></strong></a>.
        </p>
      </div>
      <hr className="section-border"></hr>
    </section>
  )
};

export default Hero
