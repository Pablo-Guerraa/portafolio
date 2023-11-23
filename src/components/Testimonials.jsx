import React from "react";

import Slider from "react-slick";

const Testimonials = () => {
  const reviews = [
    {
      name: "Sheran",
      position: "English teacher of Albright Institute",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Dedicated and diligent learner, Pablo has shown commendable progress in both vocabulary and grammar skills. The commitment to improvement is evident. Focus on refining pronunciation and structuring written work will further enhance overall communication. Keep up the impressive effort and dedication to continuous learning!",
      rating: 5,
    },
    {
      name: "Sara Estefania B.",
      position: "ReacJs Teacher of Academy Geek",
      src: "images/testimonial/sara.jpeg",
      desc: "Great work, Pablo! Your commitment to learning web development is impressive. I've noticed your analytical skills shining through in problem-solving. Consider optimizing time management and actively participating in group projects for even more growth. Keep it up!",
      rating: 5,
    },
    {
      name: "Fabian Mauricio G.",
      position: "Brother - Web developer of Imagemaker",
      src: "images/testimonial/mauricio.jpeg",
      desc: "Collaborating with my brother, has been fantastic. His technical prowess and creative approach elevate our projects. [Your name] is an excellent collaborator and adapts seamlessly to new challenges.",
      rating: 5,
    },
    {
      name: "Andres ",
      position: "Coworker at Polygon",  
      src: "images/testimonial/andres.jpeg",
      desc: "Great collaborator! Pablo brings a strong work ethic and attention to detail to our projects. He communicates effectively and is a reliable team player. Pleasure working together.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className="section "
    >
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 text-light"
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 "
            }
          >
            {" "}
            References
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5"
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                      style={{maxHeight: '70px'}}
                    />
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600"
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 "
                    }
                  >
                    “{value.desc}”
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
