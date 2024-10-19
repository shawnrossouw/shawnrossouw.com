import React from "react";
import _ from "./style.module.css";
import projects from "./projects";
import Link from "next/link";

const Work = () => (
  <div className={_.work} id="portfolio">
    <article>
      <h2>Portfolio</h2>
      <p>A list of projects I have worked on and contributed to. </p>
      {projects.map((project, k) => (
        <section className={_.projects} key={k}>
          <h3>Latest Projects</h3>
          <div className={_.inner}>
            {project.latest.map((item, k) => (
              <div className={_.card} key={k}>
                <figure>
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className={_.content}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.url && (
                    <Link href={item.url}>
                      <a target="_blank" rel="noopener noreferrer nofollow">
                        {item.link}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <h3>Older Projects</h3>
          <div className={_.inner}>
            {project.old.map((item, k) => (
              <div className={_.card} key={k}>
                <figure>
                  <img src={item.image} alt={item.alt} />
                </figure>
                <div className={_.content}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.url && (
                    <Link href={item.url}>
                      <a target="_blank" rel="noopener noreferrer nofollow">
                        {item.link}
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </article>
  </div>
);
export default Work;
