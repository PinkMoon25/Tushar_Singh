import React from "react";
import resume from '../resume/resume.pdf'

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <p>Born and raised in India. I am a passionate software developer and an avid learner.
        I like all things Programming and Problem-solving.
        I contribute and work as a Code Reviewer with Microverse.
        I like Music&#127926;, Walk in a park	
&#128694; and playing guitar for my leisure &#128516;
      </p>
      <a href={resume} target='_blank'><button>Résumé</button></a>
    </section>
  )
};

export default About