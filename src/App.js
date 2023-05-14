import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import MyProjects from "./pages/MyProjects.jsx";
import AnimatedCursor from "react-animated-cursor";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <AnimatedCursor
          color="255, 255, 255"
          innerSize={8}
          outerSize={25}
          innerScale={1}
          outerScale={1.7}
          outerAlpha={0.5}
          hasBlendMode={true}
          outerStyle={{
            zIndex: "1000000",
          }}
          innerStyle={{
            zIndex: "1000000",
          }}
        />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/myprojects" element={<MyProjects />} />
        </Routes>
      </Router>
    );
  }
}
