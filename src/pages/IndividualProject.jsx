import React, { Component } from "react";
import { Element, Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
// import MyProjects from "./MyProjects.jsx";
//import ScrollButton from "../components/scrollButton.jsx";
import { TypeAnimation } from "react-type-animation";
// import projectData from "./projectsData.json";
// import Project from "../components/Project.jsx";
import Navbar from "../components/Navbar.jsx";
import ControlledAccordionIndividual from "../components/CollapsibleCard.jsx";
import "./css/GroupProject.css";
import "./css/MyProjects.css";


export default class IndividualProject extends Component {
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
                  Research Questions and the Findings
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
                  CMD Methods
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
                The main goal of this assignment was to create a personal
                website portfolio to gather all the deliverables and products
                that I worked on and created during this Advanced Media
                semester. I would also like to use this portfolio for my
                graduation internship search. The website template and design
                that I created was used for both the advanced media portfolio
                and my professional portfolio, but the structure and content was
                modified to best fit the requirements of a professional
                portfolio. The final product that the professors would receive
                is a link to a hosted site. It is an individual assignment,
                therefore all of the following work that you see was done by me.{" "}
              </p>
            </div>
          </Element>
          <Element name="element2" className="portfolio">
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
                The first step of the process of creating the portfolio was
                outlining main and sub research questions. I wanted to use these
                research questions to clearly outline my personal goals with
                this portfolio. My main research question was:
              </p>
              <b
                className="indent"
                style={{
                  display: "inline-block",
                  marginTop: "1vw",
                  marginBottom: "2vw",
                }}
              >
                How might I create a portfolio website that effectively presents
                my work and is user friendly?
              </b>
              <p
                className="indent"
                style={{
                  marginBottom: "2vw",
                }}
              >
                The following sub questions were used as more specific goals
                that would support the main goal outlined in the main research
                question. The methods used to answer each question and a summary
                of the conclusion/results of using the CMD methods can be found
                below each sub question:
              </p>
              <ol style={{ listStyleType: "upper-roman" }}>
                <li className="researchQuestions">
                  <b>What is the best way to navigate a portfolio?</b>
                  <div className="researchQuestionsSection">
                    <b>CMD Methods Explored:</b> Benchmark Creation, Wireframes
                  </div>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                    After completing my benchmark creation assessment, I decided
                    that I would create three separate pages for each of my
                    projects, based on the other . However, I needed a way to
                    easily scroll through all of my content, therefore I deduced
                    that the best solution for my portfolio would be to have a
                    sub navigation on the project pages to facilitate the users
                    journey when trying to find a specific piece of information
                    about one of my projects.
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>
                    What is the most comprehensible way to divide the content in
                    my portfolio?
                  </b>
                  <div className="researchQuestionsSection">
                    <b>CMD Methods Explored:</b> Usability Testing, Wireframes
                  </div>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                    For this question, I refered to my benchmark creation
                    research to see how other professionals were dividing the
                    content on their portfolio websites. Most of the seemed to
                    be divided by just the project themselves so I decided to do
                    the same in my portfolio. Because I had to focus on only
                    three projects, I thought it would be appropriate to add the
                    projects as their own menu items that can be accessed
                    directly through my home page.
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>
                    What are employers currently looking for in a professional
                    portfolio?
                  </b>
                  <div className="researchQuestionsSection">
                    <b>CMD Methods Explored:</b> Benchmark Creation
                  </div>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                    Benchmarking the portfolios of other professionals was a
                    valuable research method to understand what the industry
                    standards and expectations are when it comes to portfolio
                    design. By analyzing and studying successful portfolios of
                    professionals in similar fields to me, I was able to gain
                    insights into the elements, organization, and presentation
                    styles that resonate with potential employers or clients in
                    todays standards. This research helped me also identify
                    trends, common practices, and innovative approaches which
                    are all important factors that professionals are looking for
                    in portfolios. I was able to tailor my own portfolio to
                    align with the expectations of my assesor and future
                    employees and show my work in a compelling and competitive
                    manner.
                  </div>
                </li>
                <li className="researchQuestions">
                  <b>
                    How can I ensure that my portfolio encompasses who I am as a
                    professional?
                  </b>
                  <div className="researchQuestionsSection">
                    <b>CMD Methods Explored:</b> Usability Testing, Wireframes
                  </div>
                  <div className="researchQuestionsSection">
                    <b>Conclusion to Question:</b>
                    My inspiration moodboard was be used to showcase my
                    professional and professional identity and style in a
                    website portfolio. By curating images, colors, typography,
                    and other design elements that resonate with my own personal
                    aesthetic and professional values, I was able to create a
                    visual representation of my unique approach. I believe the
                    moodboard will give visitors a glimpse into my own design
                    preferences, influences, and the overall mood I aim to evoke
                    in my work, helping them understand my design perspective
                    and hopefully making a lasting impression on my assessors
                    and future employers. Some of these preferences include:
                    <ol style={{ listStyleType: "decimal" }}>
                      <li>
                        Animations - On homepage and using the typing animation
                        on titles and text
                      </li>
                      <li>Darker colored designs with pops of color</li>
                      <li>Trying to add fun and personalized elements</li>
                    </ol>
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
            <a href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit?usp=sharing">
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
