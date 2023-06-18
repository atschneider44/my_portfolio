import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./CollapsibleCard.css";
import "./ContactForm.css";

import moodboard from "../images/website pics/individual/moodboard.png";
import wireframe from "../images/website pics/individual/wireframe.png";
import benchmark from "../images/website pics/individual/benchmark.png";

export default function ControlledAccordionIndividual() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="Accordion">
      <Accordion
        className="AccordionFull"
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "10%", flexShrink: 0 }}>
            <b>Moodboard</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Stepping Stone
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <img
                src={moodboard}
                alt=""
                style={{
                  height: "50vh",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  How can I ensure that my portfolio encompasses who I am as a
                  professional?
                </li>
              </ol>
            </div>

            <div className="AccordionTitle">
              {" "}
              <b>Why did I utilize a Moodboard?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Creating a moodboard for a portfolio website is essential as it
              helped establish a cohesive visual direction and aesthetic for my
              online presence. It allowed me to gather and arrange design
              elements, color schemes, typography, and imagery that align with
              my personal brand and desired message. A moodboard served as a
              visual guide throughout the design process, ensuring consistency
              in my design and conveying the desired atmosphere to captivate
              potential clients or employers.
            </div>
            <div className="AccordionTitle">
              <b>How did I create the Moodboard?</b>
            </div>
            <div className="AccordionTextBody">
              To create a moodboard for my portfolio website, I started by
              collecting visual inspiration images, screenshots, color palettes,
              typography, and textures that align with the desired look and feel
              of of my final portfolio website. I arranged these elements on
              Canva. I focused on creating a cohesive moodboard that reflected
              the website's desired mood, style, and user experience. I used the
              moodboard as a reference throughout the design process to ensure I
              delivered a product like the one I initaially wanted.
            </div>

            <Button
              className="docBtn"
              target="_blank"
              href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit#bookmark=id.d1l74pwn1um5"
            >
              Link to Moodboard Section in Reading Guide
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "16%", flexShrink: 0 }}>
            <b> Benchmark Creation</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Library</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>
              <img
                src={benchmark}
                alt=""
                style={{
                  height: "30vh",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>What is the best way to navigate a portfolio?</li>
                <li>
                  What are employers currently looking for in a professional
                  portfolio?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did I utilize Benchmark Creation?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              The Benchmark Creation method provided a way to evaluate the
              effectiveness of different design alternatives or solutions. By
              conducting a benchmark creation assessment, designers can
              establish a baseline which they can compare the performance of
              their designs to others in the industry, allowing for them to
              confirm that they are meeting industry standards. This allows for
              designers to see strengths and weaknesses and make improvements in
              their own design, ensuring that they have selected the best design
              option.
            </div>
            <div className="AccordionTitle">
              <b>How did I create my Benchmarck Creation analysis?</b>
            </div>
            <div className="AccordionTextBody">
              To conduct benchmark creation for my portfolio website, I began by
              researching and exploring a variety of existing portfolio websites
              in my industry. I analyzed their layouts, navigation, content
              organization, visual aesthetics, and overall user experience. I
              identify successful elements and patterns that align with my own
              goals and my target audience. I used these benchmarks as a
              reference to guide the design and development of my portfolio
              website, incorporating the best practices while adding my own
              unique touch to stand out in the competitive landscape.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="https://docs.google.com/document/d/1us3SSTo39foHRMESqPrd_SQ7wgfKUecNq6TdqJrCrM4/edit?usp=sharing"
              >
                Benchmark Creation Document
              </Button>
              <Button
                className="docBtn"
                target="_blank"
                href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit#bookmark=id.m4i7pqkm7m07"
              >
                Link to Benchmark Creation Section in Reading Guide
              </Button>
            </ButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "13%", flexShrink: 0 }}>
            <b>Usability Testing</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Lab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  What is the most comprehensible way to divide the content in
                  my portfolio?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did I utilize Usability Testing?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Usability testing for my portfolio website is crucial to ensure
              that it effectively communicates my skills and work to potential
              employers and my advandia media teachers. It helped me identify
              user experience issues, usability barriers, and areas of
              improvement that may hinder visitors from navigating or engaging
              with my portfolio. By conducting usability testing, I was able to
              gather valuable feedback, make informed design decisions, and
              optimize my website's usability to create a seamless and impactful
              user experience.
            </div>
            <div className="AccordionTitle">
              <b>How can you conduct Usability Testing?</b>
            </div>
            <div className="AccordionTextBody">
              To conduct usability testing for a portfolio website, start by
              defining specific tasks or scenarios that users would typically
              engage with on the site. Recruit a diverse group of participants
              who represent your target audience. Observe and record their
              interactions with the website, noting any issues, confusion, or
              areas of improvement. Collect feedback through post-test interview
              questions to gain insights into the user experience and make
              data-driven improvements to enhance the usability and
              effectiveness of your portfolio website, like I did with mine.
            </div>

            <Button
              className="docBtn"
              target="_blank"
              href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit#bookmark=id.j44umft39heg"
            >
              Link to Benchmark Creation Section in Reading Guide
            </Button>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "10%", flexShrink: 0 }}>
            <b>Wireframes</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Workshop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div>
              <img
                src={wireframe}
                alt=""
                style={{
                  height: "30vh",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>What is the best way to navigate a portfolio?</li>
                <li>
                  What is the most comprehensible way to divide the content in
                  my portfolio?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did I create wireframes?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Creating wireframes for my portfolio website was essential to plan
              and structure the layout and content before diving into visual
              design. Wireframes provide a simplified representation of the
              website's elements, such as navigation, sections, and content
              placement, allowing for me to focus on the site's structure and
              user flow. They serve as a blueprint for my portfolio, helping me
              visualize and iterate on the layout and ensure a well-organized
              and intuitive user experience.
            </div>
            <div className="AccordionTitle">
              <b>How can you create wireframes?</b>
            </div>
            <div className="AccordionTextBody">
              To create wireframes for a portfolio website, begin by outlining
              the key sections and content you want to include on your
              portfolio. I used a wireframing tool to sketch the basic layout,
              focusing on the placement of elements, such as navigation,
              headings, images, and text, but really focused on the layout. I
              kept the wireframes simple and didn't add detailed visuals to
              prioritize the structure and hierarchy of information. Iterate and
              refine the wireframes based on feedback and user testing to ensure
              optimal usability and a clear representation of your portfolio's
              content.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="https://miro.com/app/board/uXjVMeygkIw=/?share_link_id=478370444484"
              >
                Wireframes
              </Button>
              <Button
                className="docBtn"
                target="_blank"
                href="https://docs.google.com/document/d/1FFAddMge0wCGzyQLlM5sUdWTAKe-TVFti6yqzP4od3s/edit#bookmark=id.2774pkz06v9x"
              >
                Link to Wireframe Section in Reading Guide
              </Button>
            </ButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
