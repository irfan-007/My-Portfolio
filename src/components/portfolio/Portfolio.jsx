import React from "react";
import "./Portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  const portfolioArray = [
    { title: "project name 1", img: img2, id: 1, demo: "", github: "" },
    { title: "project name 2", img: img1, id: 2, demo: "", github: "" },
    { title: "project name 3", img: img3, id: 3, demo: "", github: "" },
    { title: "project name 4", img: img4, id: 4, demo: "", github: "" },
    { title: "project name 5", img: img5, id: 5, demo: "", github: "" },
    { title: "project name 6", img: img6, id: 6, demo: "", github: "" },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioArray.map((item) => {
          return (
            <article key={item.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.img} alt="#" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.github} className="btn">
                  Github
                </a>
                <a href={item.demo} target="_blank" className="btn btn-primary">
                  LiveDemo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
