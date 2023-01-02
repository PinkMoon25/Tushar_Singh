import React from "react";
import resume from '../resume/resume1.pdf'
import jsIcon from '../icons/icons8-javascript.png'
import railsIcon from '../icons/icons8-rails.png'
import reactIcon from '../icons/icons8-react.png'
import reduxIcon from '../icons/icons8-redux.png'
import rubyIcon from '../icons/icons8-ruby.png'
import background from '../img/animatedshape.svg';

const About = () => {
  return (
    <div className="bg-container" style={{ backgroundImage: `url(${background})` }} >
      <section id="about" className="about-section">
        <h1>About Me</h1>
        <div className="tech-stack">
          <h2 style={{ textDecoration: 'underline' }}>Stack</h2>
          <ul style={{ fontWeight: 700 }}>
            <li><img src={jsIcon} alt='JavaScript icon by Icons8' width='20%' />JavaScript </li>
            <li><img src={reactIcon} alt='React icon by Icons8' width='20%' />React </li>
            <li><img src={reduxIcon} alt='Redux icon by Icons8' width='20%' />Redux </li>
            <li><img src={rubyIcon} alt='Ruby icon by Icons8' width='20%' />Ruby </li>
            <li><img src={railsIcon} alt='Rails icon by Icons8' width='20%' />Rails </li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Skills = &#123; </h2>
          <ul className="skills-card-list">
            <li><h3>front-end-development&#58;</h3></li>
            <ul className="skill-array">
              <li> &#91; Html  &#44;</li>
              <li> CSS  &#44;</li>
              <li> Bootstrap  &#44;</li>
              <li> JavaScript  &#44;</li>
              <li> ReactJs  &#44;</li>
              <li> Redux &#65341;</li>
            </ul>
            <li><h3>back_end_development&#58;</h3></li>
            <ul className="skill-array">
              <li> &#91; Ruby  &#44;</li>
              <li> Rails  &#44;</li>
              <li> Rspec  &#44;</li>
              <li> PostgreSQL &#65341;</li>
            </ul>
          </ul>
          <span style={{ fontSize: '1.5rem', fontWeight: '700' }} className='curly-sign'>&#125; &#59;</span>
        </div>
        <div className="about-details">
          <p style={{ margin: '25px 0', fontWeight: '700' }}>Born and raised in India. I am a passionate software developer and an avid learner.<br />
            I like all things Programming and Problem-solving.<br />
            I contribute and work as a Code Reviewer with Microverse.<br />
            I like Music &#127926; &nbsp;Walk in a park &#128694; and playing guitar at my leisure &#128516;
          </p>
          <a href={resume} target='_blank'><button>Résumé</button></a>
        </div>
      </section>
    </div>
  )
};

export default About