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
                        "I build, <span style='color:#00887a'>Scalable</span>, <span style='color:#00887a'>Reusable</span> and <span style='color:#00887a'>Maintainable</span> UI components..."
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
            <button className="btn btn-success rounded-pill btn-rounded ">
              Get in Touch
              <span className="mx-1">
                <i className="bi bi-arrow-right-circle"></i>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
