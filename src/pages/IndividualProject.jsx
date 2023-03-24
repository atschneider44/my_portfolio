import React, { Component } from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
import ScrollButton from "../components/scrollButton.jsx";
import Navbar from "../components/Navbar.jsx";
import "./css/GroupProject.css";

export default class IndividualProject extends Component {
  state = {
    color: "black"
  };

  listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      this.setState({ color: "white" });
    } else {
      this.setState({ color: "black" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="group">
          <div className="project-titles">Individual Assignment</div>
          <Link
            className="scroll-button"
            activeClass="active"
            spy
            to="assignmentDescription"
          >
            <ScrollButton></ScrollButton>
          </Link>
          <header className="nav" style={{ color: this.state.color }}>
            <nav className="nav__container__actions">
              <ul>
                <li className="linkSideNav">
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="assignmentDescription"
                  >
                    Assigment Description
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="targetAndStake">
                    Scope
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="define">
                    Define
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="ideate">
                    Ideate
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="prototype">
                    Prototype
                  </Link>
                </li>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="test">
                    Test
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section className="sectiongroup" id="assignmentDescription">
            Assignment Description
            <p className="text-main-project">
              The main goal of this assignment was to create a personal website
              portfolio to gather all the deliverables and products that I will
              be working on and creating during this Advanced Media semester. I
              would also like to use this portfolio for my graduation internship
              search. The website template and design that I create could be
              used for both the advanced media portfolio and my professional
              portfolio, but the structure and content will be modified to best
              fit the requirements of a professional portfolio. The total
              duration of the project was 4 weeks and the final product that the
              professors would receive is a link to a hosted site. It is an
              individual assignment, therefore all of the following work that
              you see was done by me.
              <br />
              <br />
              <p style={{ fontWeight: "bold" }}>Stakeholders</p>
              <ul className="target-list">
                <li>
                  Erik Heijligers - Project Owner - As the main coordinator of
                  the advanced media semester, Erik will be the main
                  project/product owner as he assigned us the project and set
                  out the requirements
                </li>
                <li>
                  Paul Reekers - Project Manager/Mentor - Paul is my project
                  mentor and will be giving me weekly feedback
                </li>
                <li>
                  Anna-Theresa Schneider - Designer/Developer - I will be the
                  main UX designer and developer for my portfolio website.
                </li>
              </ul>
            </p>
          </section>
          <section className="sectiongroup" id="targetAndStake">
            Research Questions and Target Group
            <p className="text-target-project">
              The first step of the process of creating the portfolio was
              outlining main and sub research questions. I wanted to use these
              research questions to clearly outline my personal goals with this
              portfolio. My main research question was:
              <br />
              <br />
              <p style={{ fontWeight: "bold", textAlign: "center" }}>
                How might I create a portfolio website that effectively presents
                my work and is user friendly?
              </p>
              <br />
              The following sub questions were used as more specific goals that
              would support the main goal outlines in the main research
              question:
              <br />
              <ol className="questions-list">
                <li>What is the best way to navigate a portfolio?</li>
                <li>
                  What is the most comprehensible way to divide the content in
                  my portfolio?
                </li>
                <li>How can I ensure that my portfolio is responsive?</li>
                <li>
                  What are employers currently looking for in a professional
                  portfolio?
                </li>
                <li>
                  How can I ensure that my portfolio encompasses who I am as a
                  professional?
                </li>
              </ol>
              <br />
              <br />
              <p style={{ fontWeight: "bold" }}>Target Group</p>
              There are two main target groups for this portfolio:
              <ul className="target-list">
                <li>
                  The Advanced Media Semester Teachers and my project mentors,
                  Paul Reekers and Rose Wetering. They will be using the
                  portfolio to have an overview of my assignments and the work
                  I've done both for the group and individual assignment.
                </li>
                <li>
                  All possible internship recruiters. It would be extremely
                  useful to utilize this portfolio that I create as a
                  professional portfolio in the future. I will be searching for
                  a graduation internship soon, therefore I would like to have a
                  portfolio that I can send to companies that not only shows all
                  the work I've done but also the kind of professional I would
                  like to be.
                </li>
              </ul>
              <div className="stakeholder-chart"></div>
            </p>
          </section>
          <section className="sectiongroup" id="define">
            Concepting
            <p className="text-target-project">
              The first phase of my design process was creating a concept and
              vision before beginning any form of development. I set a few
              guidelines as well to keep in mind during my process:
              <br />
              <br />
              The following sub questions were used as more specific goals that
              would support the main goal outlines in the main research
              question:
              <ul className="questions-list">
                <li>
                  Possible to develop in 4 weeks: As will be explored later in
                  the reading guide, I wanted to develop the portfolio myself
                  and not use a website builder. Therefore, it is important to
                  keep time in mind as that is a large task to complete in only
                  4 weeks including all the other research and requirements of
                  this assignment.
                </li>
                <li>
                  Include Animations: While researching trends and looking at
                  portfolio designs, adding both visual and text animation was
                  very popular. I also have started exploring animations myself
                  so I decided that this would be important for me to include in
                  my own portfolio.
                </li>
              </ul>
            </p>
          </section>
          <section className="sectiongroup" id="ideate">
            ideate
          </section>
          <section className="sectiongroup" id="prototype">
            protoype
          </section>
          <section className="sectiongroup" id="test">
            test
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}
