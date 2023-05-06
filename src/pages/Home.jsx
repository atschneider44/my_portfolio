import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "../components/Footer.jsx";
import ScrollButton from "../components/scrollButton.jsx";
import Navbar from "../components/Navbar.jsx";
import logo from "../images/annaani.png";
import annapic from "../images/annapics.jpg";
import divider from "../images/sectiondivider.gif";
import "./css/Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className="homePageCircles">
        <Navbar />
        <div className="home-page">
       
          <img src={logo} className="main-pic" alt="" />
        </div>
  
        <div className="space-bottom"></div>
        <Footer />
      </div>
    );
  }
}
