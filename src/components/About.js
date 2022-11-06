import React from "react";
import resume from '../resume/resume.pdf'
import jsIcon from '../icons/icons8-javascript.png'
import railsIcon from '../icons/icons8-rails.png'
import reactIcon from '../icons/icons8-react.png'
import reduxIcon from '../icons/icons8-redux.png'
import rubyIcon from '../icons/icons8-ruby.png'

const About = () => {
  return (
    <section id="about" className="about-section">
      <h1>About Me</h1>
      <div className="tech-stack">
        <h2 style={{textDecoration: 'underline'}}>Stack</h2>
        <ul style={{fontWeight: 700}}>
          <li><img src={jsIcon} alt='JavaScript icon by Icons8' width='20%'/>JavaScript </li>
          <li><img src={reactIcon} alt='React icon by Icons8' width='20%'/>React </li>
          <li><img src={reduxIcon} alt='Redux icon by Icons8' width='20%'/>Redux </li>
          <li><img src={rubyIcon} alt='Ruby icon by Icons8' width='20%'/>Ruby </li>
          <li><img src={railsIcon} alt='Rails icon by Icons8' width='20%'/>Rails </li>
        </ul>
      </div>
      <div className="about-details">
        <p style={{paddingBottom: '10px'}}>Born and raised in India. I am a passionate software developer and an avid learner.<br/>
          I like all things Programming and Problem-solving.<br/>
          I contribute and work as a Code Reviewer with Microverse.<br/>
          I like Music &#127926; &nbsp;Walk in a park &#128694; and playing guitar at my leisure &#128516;
        </p>
        <a href={resume} target='_blank'><button>Résumé</button></a>
      </div>
    </section>
  )
};

export default About