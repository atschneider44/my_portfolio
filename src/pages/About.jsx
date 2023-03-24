import React, { Component } from "react";
import { TypeAnimation } from "react-type-animation";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import annapic from "../images/annapics.jpg";
import SkillBar from "react-skillbars";

import "./css/About.css";
import OppositeContentTimeline from "../components/Card.jsx";

export default class About extends Component {
  render() {
    const skills = [
      { type: "Java", level: 100 },
      { type: "React", level: 85 },
      { type: "Javascript", level: 75 },
      { type: "Spring", level: 50 },
      { type: "Docker", level: 25 },
      { type: "HTML", level: 20 },
      { type: "NoSQL", level: 0 },
    ];

    const language = [
      { type: "English", level: 100 },
      { type: "Portuguese", level: 100 },
      { type: "Spanish", level: 80 },
      { type: "German", level: 60 },
      { type: "French", level: 40 },
      { type: "Ducth", level: 10 },
    ];

    const colors = {
      bar: "#af41bb",
      title: {
        text: "#fff",
        background: "#8E2A9A",
      },
    };

    return (
      <div>
        <Navbar />
        <div class="grid-container-about">
          <div class="grid-item-about">
            <img src={annapic} className="anna-pic" alt="" />
          </div>
          <div class="grid-item-about aboutText">
            <TypeAnimation
              sequence={[
                "Hi, I'm Anna. ", // Types 'One'
                2000, // Waits 3s
                () => {},
              ]}
              wrapper="div"
              cursor={false}
              speed={20}
              repeat={0}
              style={{
                fontSize: "4vw",
                fontWeight: "bold",
                color: "#000000",
                textJustify: "left",
              }}
            />
            <TypeAnimation
              sequence={[
                3000,
                "Do you want to know a little more about me?",
                3000,
                "Cool :)",
                3000,
                "I’m currently a 4th year ICT & Media Design student at Fontys University of Applied Sciences. I am Brazilian/German and had the opportunoty to grow up in many places like Morocco, Chile, and Belarus. Feel free to reach out to me and keep scrolling to see the experience and skills I have.", // Waits 2s

                () => {},
              ]}
              wrapper="div"
              cursor={true}
              speed={20}
              repeat={0}
              deletionSpeed={50}
              style={{
                fontSize: "1.5vw",
                color: "#000000",
                textJustify: "left",
              }}
            />
          </div>
          <div class="grid-item-about about-skills">
            <div className="skills-title">My Skills</div>
            <div className="card-container">
              <div className="card">
                <p>UX/UI Skills</p>
                <ul className="skills-ux-list">
                  <li>
                    Prototyping:
                    <ul className="skills-ux-list">
                      <li>Figma</li>
                      <li>Adobe XD</li>
                      <li>Axure</li>
                    </ul>
                  </li>
                  <li>Prototyping</li>
                  <li>Prototyping</li>
                </ul>
                <div className="layers"></div>
              </div>
            </div>
           
            <div className="skill-bar-container">
              <SkillBar skills={skills} colors={colors} />
            </div>
          </div>
          <div class="grid-item-about about-resume">
            <div className="skills-title">Resume</div>
            <OppositeContentTimeline></OppositeContentTimeline>
          </div>
          <div class="grid-item-about">
            <div className="skills-title">Languages</div>
            <div className="skill-bar-container">
              <SkillBar skills={language} colors={colors} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
