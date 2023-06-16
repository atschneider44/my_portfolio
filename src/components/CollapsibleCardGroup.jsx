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
import Sketches from "../images/Sketches.jpeg"


export default function ControlledAccordionGroup() {
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
          <Typography sx={{ width: "16%", flexShrink: 0 }}>
            <b>Expert Interviews</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Library</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>What does youth work do?</li>
                <li>
                  Who are the social workers and what are their main tasks in
                  their job?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we conduct Expert Interviews?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Conducting expert interviews for our project was beneficial
              because it allowed for us to gather insights and knowledge from
              experienced youth workers in the field. Their guidance and
              expertise helped us navigate through this complex design
              challenge. We don't have experience in the field of youth work and
              needed to speak to real youth workers to truly understand the
              current state of online youthwork. Additionally, the expert
              interviews allowed us to validate and enhance the credibility of
              our design solutions. We were able to speak to two different youth
              organizations too which allowed for us to have different
              perspectives from professionals.
            </div>
            <div className="AccordionTitle">
              <b>How did we conduct Expert Interviews?</b>
            </div>
            <div className="AccordionTextBody">
              To conduct expert interviews for our project, we reached out to
              youth organizations in eindhoven that were referred to us by Fenna
              and that were connected to the Municipality of Eindhoven. We
              prepared a set of interview questions to guide the interview and
              ensure we could gather meaningful insights and answer any
              questions we still had about youth work in general and their
              current efforts. During the interviews, we actively participated
              in discussions with youth workers, taking detailed notes and
              asking follow-up questions to delve deeper into topics we found
              important. Afterwards, we analyzed our findings and created a
              summary of the interview to use during the next phases of our
              project.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Testing Report
              </Button>
            </ButtonGroup>
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
          <Typography sx={{ width: "11%", flexShrink: 0 }}>
            <b> Personas</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Stepping Stones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  Who are the social workers and what are their main tasks in
                  their job?
                </li>
                <li>What does youth work do?</li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we create Personas?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Creating personas for this project was important and highly
              beneficial because it helped us to understand and define the
              needs, goals, and behaviors of the target users. Personas also
              provide a human-centered approach to any kind of design project,
              which is always beneficial to the final product. The findings from
              our personas allowed us to design solutions that truly resonate
              with the target users' expectations and preferences. In addition,
              personas serve as a common reference point for the entire team,
              aligning everyone's understanding of the users and promoting a
              unified vision of what the target audience's goals are. Lastly,
              they also helped us prioritize and make informed design decisions
              by considering the specific needs of the different user groups,
              allowing us to better empathize with the youth workers,
              encouraging us to create more impactful and user-centric designs.
            </div>
            <div className="AccordionTitle">
              <b>How did we create our Personas?</b>
            </div>
            <div className="AccordionTextBody">
              To create the personas for our design project, we used the user
              research that we had already gathered through our literary study
              and the expert interviews we had with youth workers. We analyzed
              the collected data to identify common patterns, needs, and goals
              among our target audience. Using this information, we created
              fictional personas that represented different user segments. In
              our case, that was a younger youth worker that was younger and had
              experience with the online world and an older social worker who
              was unfamiliar with the online world. We then visualized these
              personas with detailed descriptions, including demographic
              information, behaviors, motivations, and pain points, which served
              as a reference throughout the design process.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Personas
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
          <Typography sx={{ width: "21%", flexShrink: 0 }}>
            <b>Sketches & Wireframes</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Workshop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              
              
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  How can we present social workers to the youth in the most
                  reliable way?
                </li>
                <li>
                  How can we educate social workers on the use of online media?
                </li>
              </ol>
            </div>
            <div>
              <img src={Sketches} alt="" />
              </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we create Sketches & Wireframes?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Creating sketches and wireframes for our design project was highly
              beneficial. Firstly, it allowed us to quickly visualize and
              iterate on different design ideas, facilitating rapid exploration
              and refinement of concepts. Secondly, sketches and wireframes
              served as effective communication tools, enabling us to share and
              gather feedback from stakeholders, ensuring our success early in
              the design process. Lastly, they helped us identify and address
              potential usability issues and design flaws before spending
              significant time and resources in detailed designs.
            </div>
            <div className="AccordionTitle">
              <b>How did we create our sketches and wireframes?</b>
            </div>
            <div className="AccordionTextBody">
              To create sketches and wireframes for our project, we started by
              brainstorming and sketching out various design concepts on paper
              and whiteboards as a group. We iterated on these initial ideas,
              refining and improving them based on feedback, the user needs, and
              the findings we had gathered from the expert interviews. Once we
              had solidified our concepts, we translated them into digital
              wireframes, using Figma. These wireframes helped us visualize the
              layout, structure, and interactions of our designs, enabling us to
              evaluate usability and gather further feedback before moving on to
              the final steps of our design phase which included a design guide
              and high fidelity prototype.
            </div>

            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Our Wireframes
              </Button>
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Our Sketches
              </Button>
            </ButtonGroup>
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
          <Typography sx={{ width: "13%", flexShrink: 0 }}>
            <b>Prototyping</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Workshop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  How can we educate social workers on the use of online media?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we create our Prototypes?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Creating a high-fidelity prototype for our project was incredibly
              valuable. Firstly, it allowed us to showcase the final design
              vision with realistic visual and interactive elements, providing
              stakeholders with a tangible representation of the product.
              Secondly, the prototype served as a powerful tool for user
              testing, enabling us to gather feedback on the usability,
              functionality, and overall user experience. This feedback helped
              us identify and address any design flaws or improvements before
              the final deliverable. Lastly, a high-fidelity prototype served as
              a solid basis for any future development of our project.
            </div>
            <div className="AccordionTitle">
              <b>How did we create our Prototypes?</b>
            </div>
            <div className="AccordionTextBody">
              To create prototypes for the Social Sphere website, we referred to
              the wireframes that we had already made, using Figma as our main
              prototyping tool. We worked collaboratively, ensuring that the
              prototypes captured the desired user flow and accurately
              represented the design vision. Afterward, we conducted usability
              testing sessions with our prototype, collected feedback from the
              youth workers, and created an advice report focusing on the user
              experience and addressed any usability issues we found for future
              developers and designers to use when creating the next iteration
              of this website.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Our Prototype
              </Button>
            </ButtonGroup>
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
          <Typography sx={{ width: "26%", flexShrink: 0 }}>
            <b>Usability & Think Aloud Testing</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Lab</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              {" "}
              <b>Related to Research Question:</b>{" "}
              <ol style={{ listStyleType: "decimal", textDecoration:"none", outline:"none" }}>
                <li>
                How can we educate social workers on the use of online media?
                </li>
              </ol>
            </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we conduct Usability & Think Aloud Testing?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Conducting usability testing and think-aloud testing for our
              design project proved to be beneficial because it allowed us to
              gather valuable insights about how users interacted with our
              design and identify any usability issues or pain points. The
              think-aloud testing provided us with direct access to users'
              thought processes and decision-making, helping us to better
              understand the actions they did and how they understood our
              design. This feedback enabled us to make iterate on our solutions
              for improved user experience. Usability testing was also used to
              validate the effectiveness of our design choices, ensuring that
              our final product met the user needs and preferences.
            </div>
            <div className="AccordionTitle">
              <b>How did we conduct Usability & Think Aloud Testing?</b>
            </div>
            <div className="AccordionTextBody">
              To conduct usability testing and think-aloud testing for our
              website, we gathered two different groups of participants, one
              being experts of UX design and the other being the actual youth
              workers, who are our target audience. We created a test plan
              outlining specific tasks and scenarios for participants to
              complete while thinking aloud. During the testing sessions, we
              observed and noted participants' interactions and encouraged them
              to share their thoughts and feedback openly. Afterwards, we
              analyzed the data, identified common usability issues, and created
              our advice report based on the insights gained from the testing
              process.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="http://www.google.com/"
              >
                Usability Testing Report
              </Button>
            </ButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
