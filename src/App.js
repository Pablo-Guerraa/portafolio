import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";

function App() {

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [age, setAge] = useState(0);

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
  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  useEffect(() => {
    calculateAge('1997')
  }, [])

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <>
      <div
        style={{ position: "relative" }}
        className="side-header"
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          <Header handleNavClick={handleNavClick}></Header>

          <div id="content" role="main">
            <Home handleNavClick={handleNavClick} age={age}/>
            <AboutUs age={age}/>
            <Services/>
            <Resume/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
          </div>
          <Footer
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
        {/* <TermsAndConditions/>
        <Disclaimer/> */}

      </div>
    </>
  );
}

export default App;
