/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Artificial-intelligence_blog.png";

const imageAltText = "";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Flutter Mobile Apps🛠️",
    description:
      "Developed a diverse range of mobile applications using Flutter, including a Food Delivery App, TODO App, Quiz App, and an Expense Tracker App",
    url: "https://github.com/ismailariyan?tab=repositories",
  },
  {
    title: "IoT Pet Feeder🐱",
    description:
      "This multifaceted project encompassed both hardware prototyping and software coding to enable remote pet feeding through a mobile application.",
    url: "https://github.com/ismailariyan/iot-pet-feeder",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created from Microsoft's resume workshop and deployed to Azure web apps. Includes my experience and design abilities.",
    url: "https://github.com/ismailariyan/portfolio",
  },
  {
    title: "Java Projects",
    description:
      "Spearheaded complex Java-based desktop applications including a Bank Management System, a Shop Management System and Basic Email Client Application",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
