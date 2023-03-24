import React, { Component } from "react";
import { Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ProjectTitles from "../components/hideScroll.jsx";
import "./css/GroupProject.css";

export default class GroupProject extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="group">
          <header className="nav">
            <ProjectTitles name="Pprojectakldzc" /> 
            <nav className="nav__container__actions">
              <ul>
                <li className="linkSideNav">
                  <Link activeClass="active" smooth spy to="empathise">
                    Empathise
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
          <section className="sectiongroup" id="empathise">Empathise</section>
          <section className="sectiongroup" id="define">Define</section>
          <section className="sectiongroup" id="ideate">Ideate</section>
          <section className="sectiongroup" id="prototype">Protoype</section>
          <section className="sectiongroup" id="test">Test</section>
        </div>
        <Footer />
      </div>
    );
  }
}
