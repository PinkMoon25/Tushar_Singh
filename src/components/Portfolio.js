import React from "react";
import data from "../project_data";
import gif from '../img/35-edit-lineal.gif';

const Portfolio = () => {
  return(
    <main>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: '8px'}}>
        <h1>My Work...</h1>
        <img src={gif} width={50} height={50} style={{borderRadius: '50%'}}/>
      </div>
      <section id="portfolio" className="projects">
        { data.map((d, index) => (
          <div className="project" key={index}>
            <div className="image-container">
              <img src={d.image.imageSrc} alt={d.image.imageAlt} className='project-image' />
            </div>
            <a href={d.live} target='_blank'><button>See live</button></a>
            <a href={d.Source} target='_blank'><button>See source</button></a>
            <div className="project-details">
              <h2>{d.name}</h2>
              <p>{d.description}</p>
              <ul className="project-stack">
                {d.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div> 
        ))}
      </section>
      <hr className="section-border"></hr>
    </main>
  )
};

export default Portfolio
