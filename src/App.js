import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import GroupProject from "./pages/GroupProject.jsx";
import IndividualProject from "./pages/IndividualProject.jsx";
import InternationalProject from "./pages/InsternationalProject.jsx";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/groupproject" element={<GroupProject />} />
          <Route path="/individualproject" element={<IndividualProject />} />
          <Route path="/internationalproject" element={<InternationalProject />} />
        </Routes>
      </Router>
    );
  }
}