import React, { Component } from "react";
import { Element, Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
import { TypeAnimation } from "react-type-animation";

import Navbar from "../components/Navbar.jsx";
import ControlledAccordionIndividual from "../components/CollapsibleCard.jsx";
import "./css/GroupProject.css";
import "./css/MyProjects.css";

export default class InternationalProject extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <header className="nav_sub">
          <div className="nav__container__actions">
            <ul>
              <li>
                <Link
                  activeClass="activesub"
                  className="test1"
                  to="element1"
                  spy={true}
                  smooth={true}
                >
                  Assignment Description
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activesub"
                  className="test1"
                  to="element2"
                  spy={true}
                  smooth={true}
                >
                  Our Final Concept
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activesub"
                  className="test1"
                  to="element3"
                  spy={true}
                  smooth={true}
                >
                  Research Questions and the Findings
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activesub"
                  className="test1"
                  to="element4"
                  spy={true}
                  smooth={true}
                >
                  Learning Outcomes
                </Link>
              </li>
              <li>
                <Link
                  activeClass="activesub"
                  className="test1"
                  to="element5"
                  spy={true}
                  smooth={true}
                >
                  Reading Guide
                </Link>
              </li>
            </ul>
          </div>
        </header>

        <section className="portfolio">
          <Element name="element1" className="portfolio">
            <TypeAnimation
              sequence={[1000, "Assignment Description"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                marginTop: "15vw",
                top: "50%",
                right: "50%",
              }}
            />
            <div className="IndividualLText">
              <p className="textIndividual indent">
                The Dutch Design Charrette 2023 (also referred to as the
                International Week) is a project in which we worked with Dutch
                and international students in Eindhoven. We were given a week to
                work on a designated design challenge. There were students from
                Germany, France, Belgium and Lithuania joining us who were
                students in a number of programs including architecture, graphic
                design and international business. My group was assigned to the
                Cruyff Foundation assignment. The Cruyff Foundation is a
                non-profit organization that focuses on promoting and
                facilitating sports opportunities for all children and young
                people. They want to create inclusive spaces for children to
                develop through sports and play, no matter their level of
                ability. They not only have playgrounds and courts in the
                Netherlands, but have also implemented their playgrounds and
                courses world wide. In the past few years, the number of sports
                instructors have increased, however the level of movement in the
                youth has not really increased and 25% of children do not move
                and exercise enough. The assignment focused on using
                technological innovations to encourage children to move and
                exercise more.
              </p>
            </div>
          </Element>
          <Element name="element2" className="portfolio">
            <TypeAnimation
              sequence={[1000, "Our Final Concept"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                marginTop: "15vw",
                top: "50%",
                right: "50%",
              }}
            />
            <div className="IndividualLText">
              <p className="textIndividual indent">
                Our final concept focused on the idea of creating a "playground
                network" and encouraging kids to play in groups and learn more
                about renewable energies. We wanted to introduce three new group
                activities to the playground. The first was a group swing where
                many kids can sit and swing together. The second was an
                interactive trampoline field that generates different sounds
                based on the kids jumping patterns. The third was a standing
                carousel, where the kids are being spun by other kids or
                electrically. All of these activities will be generating
                renewable energy while they are being used to power the
                activities themselves through their swinging and rotational
                movements. All of the energy created by the kids will then be
                redirected to a power station, where the kids can see how much
                energy they have already generated that day. This power station
                can then provide energy for the playground activities that need
                electricity, like the sound for the trampoline field. The rest
                of the energy can be stored to provide energy for the school and
                its facilities, like the outdoor lighting for the playground.
              </p>
            </div>
          </Element>
          <Element name="element3" className="portfolio">
            <TypeAnimation
              sequence={[1000, "Research Questions"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                marginTop: "3vw",
              }}
            />
            <div className="IndividualLText">
              <p className="indent">
                The main research question that we outlined for our project was:
              </p>
              <b
                className="indent"
                style={{
                  display: "inline-block",
                  marginTop: "1vw",
                  marginBottom: "2vw",
                }}
              >
                How to get children to get out more and practice sports through
                fun games?
              </b>
              <p
                className="indent"
                style={{
                  marginBottom: "2vw",
                }}
              >
                Since the question has quite a large scope, we decided to come
                up with a supportive question, which would help us find an
                answer to our main one:
              </p>
              <ol style={{ listStyleType: "upper-roman" }}>
                <li className="researchQuestions">
                  <b>What should kids learn out of this?</b>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>
                    How to connect kids through games that trigger creativity?
                  </b>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>How to encourage kids to collaborate in games?</b>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>Which values can be implemented?</b>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                  </div>
                </li>
              </ol>
            </div>
          </Element>

          <TypeAnimation
            sequence={[1000, "CMD Methods Used"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginTop: "3vh",
              marginBottom: "5vh",
            }}
          />

          <ControlledAccordionIndividual />

          <TypeAnimation
            sequence={[1000, "Reading Guide"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginTop: "8vh",
              marginBottom: "3vh",
            }}
          />
          <p className="mainBodyText">
            My Reading Guide for this project can be found by clicking the
            button below!
          </p>
          <div className="contact-form-grid-item-submit">
            <a href="">
              <button
                className="button-submit"
                type="submit"
                value="Reading Guide"
              >
                Reading Guide
              </button>
            </a>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
