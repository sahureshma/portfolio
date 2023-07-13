import React from "react";
import "./About.css";
import ME from '../../assest/FB_IMG_1649507424999.jpg';


export default function About() {
  return (
    <section id="about">
      <hr />
      <div className="h33">
      <h3>About Me</h3>
      </div>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="IMG" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__card">
            <h3>Hello My Name Is Reshma Sahu</h3>
            <h3>I am a Front-End Developer</h3>
            <br />
            <p>
            I possess a strong skill set in JavaScript, Redux, React JS, HTML, CSS, MUI Icons, and Basic DSA. I have successfully completed various projects utilizing these skills. Additionally,
             I actively participate in coding platforms such as FunctionUp to 
             sharpen my abilities through challenges on platforms like LeetCode, Codezinger, and Codewars.
            </p>
            <br />

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}