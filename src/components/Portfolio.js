import React from "react";
import data from "../project_data";

const Portfolio = () => {
  return(
    <main>
      <h1>My Projects...</h1>
      <section id="portfolio" className="projects">
        { data.map((d, index) => (
          <div className="project" key={index}>
            <div className="iframe-container">
              <iframe src={d.live} title={d.name} sandbox></iframe>
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
        <hr className="section-border"></hr>
      </section>
    </main>
  )
};

export default Portfolio
