import React from "react";
import Typewriter from "typewriter-effect";
import developer_photo from "./../images/developer_photo.png";

export const IntroSection = () => {
  return (
    <section id="home" className="intro-section ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 intros text-start">
            <h1 className="display-2">
              <span className="display-2--intro ">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello!, ")
                      .pauseFor(2000)
                      .typeString(
                        "I'm <span style='color:#00887a'>Igwe Acha.</span>"
                      )
                      .pauseFor(6000)
                      .deleteChars(10)
                      .typeString(
                        "a <span  style='color:#00887a'>Frontend developer.</span> "
                      )
                      .pauseFor(6500)
                      .changeDeleteSpeed(3500)
                      .deleteAll()
                      .typeString(
                        "I build, <span style='color:#00887a;font-family: Gloria Hallelujah, cursive;'>Scalable</span>, <span style='color:#00887a;font-family: Gloria Hallelujah, cursive;'>Reusable</span> and <span style='color:#00887a;font-family: Gloria Hallelujah, cursive;'>Maintainable</span> UI components..."
                      )
                      .pauseFor(9500)
                      .changeDeleteSpeed(4500)
                      .deleteAll()

                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                />
              </span>
              <span className="display-2--description lh-base ">
                A professional software developer. Experinced in frontend web
                developement.
              </span>
            </h1>
            <button className="btn btn-success rounded-pill btn-rounded">
              Get in Touch
              <span>
                <i className="bi bi-arrow-right-circle ml-2"></i>
              </span>
            </button>
          </div>
          <div className="col-md-6 intros">
            <div className="video-box text-center">
              <img
                className="img-fluid"
                src={developer_photo}
                alt="a developer image"
              />
              <a href="#">
                <span className="border-animation"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,288L120,245.3C240,203,480,117,720,69.3C960,21,1200,11,1320,5.3L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
