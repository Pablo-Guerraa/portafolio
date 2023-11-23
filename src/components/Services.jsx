import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "Front end Web developer",
      desc: "Focused on delivering visual and technical solutions that enhance the usability and appearance of web projects.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Back end Web developer",
      desc: " Back-End Developer dedicated to crafting efficient and scalable solutions for web applications.",
      icon: "fas fa-desktop",
    },
    {
      name: "Design thinking",
      desc: "Dedicated to leveraging Design Thinking methodologies to solve complex problems and deliver impactful, human-centered designs for a meaningful user experience.",
      icon: "fas fa-bullhorn",  
    },
  ];

  return (
    <section
      id="services"
      className="section bg-light"
    >
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className="text-24  text-uppercase fw-600 w-100 mb-0 text-light  opacity-4"
          >
            Services
          </h2>
          <p
            className="text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className=
                          "featured-box-icon text-primary  shadow-sm rounded bg-white"
                      >
                        <i className={service.icon} />
                      </div>
                      <h3>
                        {service.name}
                      </h3>
                      <p
                        className="mb-0 "
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
