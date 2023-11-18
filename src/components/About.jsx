import React, { useEffect, useState } from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = () => {
  const [age, setAge] = useState(0)

  const calculateAge = (date) => {
    const today = new Date();
    const birthday = new Date(date);
    let result = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      result--;
    }
    setAge(result)
  }

  useEffect(() => {
    calculateAge('1997')
  }, [])

  return (
    <section id="about" className="section">
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4"
          >
            About Me
          </h2>
          <p
            className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className="text-7 fw-600 mb-3">
              I'm <span className="text-primary">Pablo Guerra,</span> a Web
              Developer
            </h2>
            <p>
            Hello! I'm a passionate web developer specializing in React.js and Node.js. My focus is on creating engaging and efficient digital experiences. From crafting dynamic user interfaces with React to robust backend development with Node.js, I enjoy translating concepts into code. Always eager to tackle new challenges and stay up-to-date with the latest trends in the world of web development.
            </p>
            <p>
            Let's build something great together
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className="list-style-2"
              >
                <li>
                  <span className="fw-600 me-2">Full name:</span>Pablo Andres Guerra Bedoya
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:pguerrabedoya@gmail.com">pguerrabedoya@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>{age}
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Medellin,
                  Colombia
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
