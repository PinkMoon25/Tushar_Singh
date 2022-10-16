import React from "react";
import resume from '../resume/resume.pdf'

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
        <p>Born and raised in India. I am a passionate software developer and an avid learner.<br/>
          I like all things Programming and Problem-solving.<br/>
          I contribute and work as a Code Reviewer with Microverse.<br/>
          I like Music &#127926; &nbsp;Walk in a park &#128694; and playing guitar at my leisure &#128516;
        </p>
      <div className="tech-stack">
        <h2 style={{textDecoration: 'underline'}}>Stack</h2>
        <ul style={{fontWeight: 700}}>
          <li>JavaScript </li>
          <li>React </li>
          <li>Redux </li>
          <li>Ruby </li>
          <li>Rails </li>
        </ul>
      </div>
      <a href={resume} target='_blank'><button>Résumé</button></a>
    </section>
  )
};

export default About