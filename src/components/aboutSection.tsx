import React from "react";
import igwe_acha from "./../../src/images/igwe_acha.jpg";

export const AboutSection = () => {
  return (
    <section id="about-me" className="about-me pt-4">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path
          // fill="#273036"
          fill="#b1cefc"
          fill-opacity="1"
          d="M0,160L120,160C240,160,480,160,720,138.7C960,117,1200,75,1320,53.3L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg> */}
      <div className="container">
        <div className="text-center">
          <h4 className="fw-bolder mb-2">ABOUT ME</h4>
          <div className="heading-line"></div>
        </div>
        <div className="row pt-4 ">
          <div className="col-md-6 p-sm-4 p-md-3 text-center ">
            <img
              className="img-fluid image_container"
              src={igwe_acha}
              alt="igwe acha photo"
            />
          </div>

          <div className="col-md-6 px-3 pt-3  display-2--about_me">
            My name is{" "}
            <span
              style={{
                color: "#00887a",
                fontFamily: "Gloria Hallelujah, cursive",
              }}
            >
              Igwe Acha A.
            </span>
            , I am a Frontend developer. I have about four years of professional
            experince using frontend technologies such as:{" "}
            <span
              style={{
                color: "#00887a",
              }}
            >
              HTML
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              CSS
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              ReactJS
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Redux
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Javascript
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Typescript
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Bootstrap
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Tailwind
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              SASS
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Git flow
            </span>
            ,
            <span
              style={{
                color: "#00887a",
              }}
            >
              Remote work.
            </span>
            <br />
            <br />I create scalable, maintainable, fun, innovative, accessible
            and fast websites. I try to make all lines of my code more readable,
            modular, performant and accessible than I found it, to make life
            easier for my team.
          </div>
        </div>
      </div>
    </section>
  );
};
