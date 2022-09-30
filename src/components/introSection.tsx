import React, { useEffect, useState } from "react";
import developer_photo from "./../images/developer_photo.png";

export const IntroSection = () => {
  // const [tagLines, setTaglines] = useState([
  //   "Hello, I'm Mazi Igwe!",
  //   "I'm a frontend developer...",
  // ]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState("Hello, I'm Mazi Igwe!");
  const [letter, setLetter] = useState(0);

  useEffect(() => {
    if (letter <= typing.length) {
      setTimeout(() => {
        setText(text + typing[letter]);
        setLetter(letter + 1);
      }, 400);
    } else {
      setLetter(0);
      setText("");
    }
  }, [letter]);

  return (
    <section id="home" className="intro-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 intros">
            <h1 className="display-2">
              <span className="display-2--intro">{text}</span>
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
