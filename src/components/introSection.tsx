import React from "react";
import Typewriter from "typewriter-effect";
import developer_photo from "./../images/developer_photo.png";

export const IntroSection = () => {
  return (
    <section id="home" className="intro-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello!, ")
                      .pauseFor(2500)
                      .typeString("I'm Igwe Acha.")
                      .pauseFor(4000)
                      .deleteChars(10)
                      .typeString("a Frontend developer.")
                      .pauseFor(2500)
                      .changeDeleteSpeed(1500)
                      .deleteAll()
                      .typeString(
                        "I build, Scalable, Reusable and Maintainable UI components..."
                      )
                      .pauseFor(5500)
                      .changeDeleteSpeed(2500)
                      .deleteAll()

                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                />
              </span>
              <span className="display-2--description lh-base">
                A professional software developer. Experinced in frontend web
                developement.
              </span>
            </h1>
            <button className="rounded-pill btn-rounded">
              Get in Touch
              <span>
                <i></i>
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
