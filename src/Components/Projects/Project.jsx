import React from "react";
import "./Project.css";

const projectLists = [
  {
    title: "Weather",
    image: "./Images/weather.png",
    des: "Shows the Weather of the places based on the cities.",
    link: "https://github.com/nabaraj77/WatherApp",
  },
  {
    title: "ToDo React App",
    image: "./Images/todo.png",
    des: "Helps to save the list of the things done.",
    link: "https://github.com/nabaraj77/ToDo-React-APP",
  },
  {
    title: "Meme Generator",
    image: "./Images/meme.jpg",
    des: "Generates the random meme.",
    link: "https://github.com/nabaraj77/Meme-Generator",
  },
  {
    title: "Ecommerce",
    image: "./Images/ecommerce.webp",
    des: "Ecommerce website using HTML, CSS, JS, ReactJS.",
    link: "https://github.com/nabaraj77/grocery-store",
  },
];

const Project = () => {
  return (
    <div className="projectWrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="10 100 1240 150"
        className="path"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,4L0,101.3C120,139,240,213,360,229.3C480,245,600,203,720,181.3C840,160,960,160,1080,176C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
      <h3 className="projectTitle">Portofolio Projects</h3>
      <div className="projectList">
        {projectLists.map((project) => {
          //console.log(project);
          return (
            <>
              <div className="card" style={{ width: "17rem" }}>
                <img
                  src={project.image}
                  className="card-img-top image"
                  alt="Weather Image"
                />

                <div className="card-body">
                  <h5 class="card-title">
                    {project.title}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-github fa-fade github"></i>
                    </a>
                  </h5>
                  <p className="card-text">{project.des}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
