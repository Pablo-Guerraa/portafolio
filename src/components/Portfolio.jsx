import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const projectsData = [
    {
      title: "Pokedex",
      projectInfo: "This user-friendly interface allows you to effortlessly navigate through the collection, providing you with comprehensive information and links to related resources. But that's not all; I've integrated a stylish night mode so you can enjoy the experience even in the darkness.",
      client: "Educational project",
      technologies: "React js, Redux, React router, Tailwind",
      industry: "Entertainment",
      date: "April 20, 2022",
      url: {
        name: "PokeApi",
        link: "https://pokedex-007.netlify.app/",
      },
      thumbImage: "images/projects/pokedex-1.png", 
      sliderImages: [
        "images/projects/pokedex(darkMode)-2.png",
        "images/projects/pokedex-3.png",
        "images/projects/pokedex(darkMode)-4.png",
        "images/projects/pokedex(darkMode)-5.png",
        "images/projects/pokedex-6.png",
      ],
    },
    {
      title: "Simple e-commerce",
      projectInfo: "Discover the simplicity of online shopping with our e-commerce site. Browse, shop, and enjoy, day or night!",
      client: "Educational project", 
      technologies: "Html, Css, Javascrip",
      industry: "Sales",
      date: "March 28",
      url: {
        name: "www.My-ecomerce.com",
        link: "https://ecommerce-p-007.netlify.app/",
      },
      thumbImage: "images/projects/ecomerce-5DM.png",
      sliderImages: [
        "images/projects/ecomerce-1.png",
        "images/projects/ecomerce-2.png",
        "images/projects/ecomerce-3.png",
        "images/projects/ecomerce-4DM.png",
      ],
    },
    {
      title: "Rick and Morty",
      projectInfo: "Enjoy the Rick and Morty characters that appear randomly on the planet",
      client: "Educational project",
      technologies: "ReactJS, Axios, React-dom, Tailwind",
      industry: "Entertainment",
      date: "May 20, 2022",
      url: {
        name: "www.RickAndMorty.com",
        link: "https://rickandmorty-007.netlify.app/",
      },
      thumbImage: "images/projects/RickAndMorty-1.png",
      sliderImages: [
        "images/projects/RickAndMorty-1.png",
        "images/projects/RickAndMorty-2.png",
      ],
    },
    {
      title: "Secure Process",
      projectInfo: "Welcome to our administrative hub, dedicated to simplifying the process of legalizing and ensuring civil safety compliance for businesses. Our streamlined platform offers efficient tools for managing safety certifications, regulatory documentation, and internal assessments. Navigate with ease, empowering your administrative team to handle compliance effortlessly. TO ACCESS THE INTERFACE USE THE FOLLOWING CREDENTIALS user: Admin1@admin.com; password: Admin1234",
      client: "AI&SD",
      technologies: "NodeJS, Express, React, Router, Redux",
      industry: "Safety at Work",
      date: "July 16, 2019",
      url: {
        name: "www.secureProcess.com",
        link: "https://erp-ps-mauricio.web.app/",
      },
      thumbImage: "images/projects/proceso-seguro-1.png",
      sliderImages: [
        "images/projects/proceso-seguro-2.png",
        "images/projects/proceso-seguro-3.png",
        "images/projects/proceso-seguro-4.png",
        "images/projects/proceso-seguro-5.png",
      ],
    }
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

    // handling filter key change
    useEffect(() => {
      if (imagesLoaded) {
           isotope.current.arrange({ filter: `*` })
      }
    }, [imagesLoaded]);
  

  return (
    <>
      <section
        id="portfolio"
        className={"section bg-light"}
      >
        <div className="container px-lg-5">
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4"
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item "
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <b>Note:</b> <p>Here, you'll find a glimpse of projects I've worked on. Please note that certain past projects aren't visible due to privacy restrictions imposed by my previous employers. If you're interested in more details about my work history, I'd be happy to provide additional information!</p>
          </div>

        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;