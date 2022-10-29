import React, { useContext } from "react";
import igwe_acha from "./../../src/images/igwe_acha.jpg";
import { SectionTitle } from "./atoms/sectionTitle";
import { ThemeContext } from "../context/themeContext";
import { ThemeContextType } from "../interfaces/theme";
import heading from "../models/heading";

interface aboutProps {
  title: heading;
}
export const AboutSection = ({ title }: aboutProps) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <section id="about-me" className="about-me pt-4">
      <div className="container">
        <SectionTitle title={title} />
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
            , I am a Software developer. I have about five years of professional
            experience working with different frontend technologies such as:{" "}
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
            <br />
            I enjoy participating in all the stages of the sofware development
            cycle; from design to developing reusable UI components using
            React.js & Typescript, to building and integrating the backend API
            using Node.js, Express server & MongoDB.
            <br />
            <br />I create scalable, maintainable, fun, innovative, accessible
            and fast websites. I try to make all lines of my code more readable,
            modular, performant and accessible than I found it, to make life
            easier for my team.
            <br />
            <br />
            In all my previous roles, I have contributed innovation, and
            leadership towards team efforts and business improvements. I am
            progressive minded and in tune with new technologies in the Software
            development industry. I have proven to be effective and
            collaborative with strong communication skills, proven presentation
            and leadership skill. I enjoy collective brainstorming sessions
            which allows me to coordinate activities to achieve a common goal.
            <br />
            <br />
            Beyond Software engineering, I am also passionate about writing,
            mentoring and sharing my knowledge and experince with my mentees and
            teammates through social media.
            <br />
            Get in touch today, to learn more about me🤓.
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path
          fill={theme === "dark" ? "#273036" : "#b1cefc"}
          fill-opacity="1"
          d="M0,32L120,64C240,96,480,160,720,165.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};
