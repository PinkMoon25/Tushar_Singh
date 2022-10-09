import React from "react";
import data from "../project_data";

const Portfolio = () => {
  return(
    <main>
      <h1>My Works...</h1>
      <section className="projects">
        { data.map(d => (
          <div className="project">
            <div className="iframe-container">
              <iframe src={d.live} title={d.name}></iframe>
            </div>
            <a href={d.live}><button>See live</button></a>
            <div className="project-details">
              <h2>{d.name}</h2>
              <p>{d.description}</p>
              <ul className="project-stack">
                {d.technologies.map(tech => (
                  <li>{tech}</li>
                ))}
              </ul>
            </div>
          </div> 
        ))}
      </section>
    </main>
  )
};

export default Portfolio
