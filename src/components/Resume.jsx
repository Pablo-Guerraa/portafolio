import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "September 25 of 2023 - Current",
      title: "General English",
      place: "Albright Institute",
      desc: "I stand out with a 100% attendance record, showcasing my active participation and attentiveness in class. My commitment to learning creates a positive and dynamic educational atmosphere.",
    },
    {
      yearRange: "February 21 of 2022 - May 20 of 2022",
      title: "DESARROLLO WEB FRONTEND EN REACTJS",
      place: "Academia Geek",
      desc: "I completed a specialized Front-End course where I excelled as one of the top 3 students. My dedication to mastering programming concepts and skills set me apart in this intensive and rewarding learning experience.",
    }
  ];

  const experienceDetails = [
    {
      yearRange: "June 09 of 2022 - March 31 of 2023",
      title: "Full stack web developer",
      place: "AI&SD",
      desc: "I focused on optimizing database connections, significantly improving efficiency in managing connections during requests. My efforts resulted in a more streamlined and responsive system, enhancing overall performance",
    },
    {
      yearRange: "June 01 of 2022 - March 31 of 2023",
      title: "Front end web developer",
      place: "POLYGONUS",
      desc: "I played a key role in optimizing server-side rendering practices in React. By rectifying inefficiencies, I ensured the full realization of client-side rendering benefits, contributing to a more efficient and streamlined development process",
    },
  ];

  const skills = [
    {
      name: "Web Design",
      percent: 60,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 90,
    },
    {
      name: "React JS",
      percent: 80,
    },
    {
      name: "Node js",
      percent: 70,
    },
    {
      name: "Data base",
      percent: 65,
    }
  ];

  return (
    <section
      id="resume"
      className="section"
    >
      <div className="container px-lg-5">
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4"
          >
            Summary
          </h2>
          <p
            className=
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark"
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className=
                "text-6 fw-600 mb-4"
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className=
                    "bg-white  rounded p-4 mb-4 bg-white border"
                  
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className="text-5">
                    {value.title}
                  </h3>
                  <p className= "text-danger">
                    {value.place}
                  </p>
                  <p className="mb-0 ">
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className="text-6 fw-600 mb-4">
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className=
                    "bg-white  rounded p-4 mb-4 bg-white border"
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className="text-5">
                    {value.title}
                  </h3>
                  <p className="text-danger">
                    {value.place}
                  </p>
                  <p className="mb-0 ">
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className="text-6 fw-600 mt-4 mb-4 "
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 text-dark"
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 "
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
