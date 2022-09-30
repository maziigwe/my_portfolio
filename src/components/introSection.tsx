import React from "react";

export const IntroSection = () => {
  return (
    <section id="home" className="intro-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">Hello, I'm Mazi Igwe!</span>
              <span className="display-2--description lh-base">
                I'm a professional software developer. Experinced frontend web
                developer.
              </span>
            </h1>
            <button className="rounded-pill btn-rounded">
              Get in Touch
              <span>
                <i></i>
              </span>
            </button>
          </div>
          <div className="col-md-6 intros"></div>
        </div>
      </div>
    </section>
  );
};
