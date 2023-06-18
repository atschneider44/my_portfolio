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

import bmc from "../images/website pics/international/bmc.JPG";
import brainstorm from "../images/website pics/international/brainstorm.JPG";
import coreflection from "../images/website pics/international/coreflection.jpg";
import fieldresearch from "../images/website pics/international/field.jpg";
import groupmovie from "../images/website pics/international/Group6.mov";

export default function ControlledAccordionInternational() {
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
          <Typography sx={{ width: "24%", flexShrink: 0 }}>
            <b>Field Research (Observation)</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Field</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={fieldresearch}
              alt=""
              style={{
                height: "35vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="AccordionTitle"> </div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we conduct Field Research?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              When we first started this design challenge, conducting field
              research was paramount for the success of our project. First and
              foremost, we needed to gain a deep understanding of the problem we
              were trying to solve and the context in which it existed. By
              immersing ourselves into a Cruyff Playground, we could observe
              firsthand the challenges faced by the children, teachers and
              parents, enabling us to develop solutions that truly addressed
              their needs. Additionally, field research allowed us to gather
              valuable insights and data that informed our design decisions,
              ensuring our solutions were grounded in real-world observations.
              After the field research, we went back to the ideation board and
              were able to successfully come up with a concept that was tangible
              and fun!
            </div>
            <div className="AccordionTitle">
              <b>How did we conduct the field research?</b>
            </div>
            <div className="AccordionTextBody">
              During the international week, conducting field research was
              crucial for our group because it provided us with direct insights
              and a deeper understanding of the problem we were trying to solve.
              We visited the Cruyff Playgrounds, allowing us to observe the
              children's behaviors, needs, and pain points firsthand. By
              immersing ourselves in this environment, we gained a more holistic
              perspective, which shaped our design decisions into a more
              community focused approach. We were able to observe the kids
              playing at the playground which allowed us to gather valuable
              feedback, validate our assumptions, and iterate our initial ideas.
              Ultimately, this approach ensured that our solution was the best
              fit for the kids and addressed their actual needs effectively.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="https://docs.google.com/document/d/1-vwTtU-FxpLy-CieJNAuq3kZt3--zGy4gvaVQOtqpj0/edit#bookmark=id.949ltuzcsj5n"
              >
                Field Research Section in Reading Guide
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
          <Typography sx={{ width: "13%", flexShrink: 0 }}>
            <b> Brainstorming</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Workshop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={brainstorm}
              alt=""
              style={{
                height: "50vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="AccordionTitle"></div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we Braintstorm?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              Brainstorming was essential for our group as it allowed us to
              generate a wide range of creative ideas and perspectives in a
              short amount of time. By coming together as a team, we were able
              to tap into our knowledge, personal skills, and different
              experiences, to analyze and come up with a solution to our design
              challenge. Through open discussions, we explored many
              possibilities and considered different viewpoints of each group
              mate, enabling us to identify unique opportunities to add a new
              activity to the playground. The brainstorming process sparked
              innovation and encouraged us to think outside the box and not
              stick to what we know, due to the fact that we were all from
              different studies, ensuring that our final solution was the best
              one we could come up with during the international week.
            </div>
            <div className="AccordionTitle">
              <b>How did Brainstorm?</b>
            </div>
            <div className="AccordionTextBody">
              We began the brainstorming session by gathering the full team at a
              table. We created a comfortable and open atmosphere by arranging
              chairs in a circle around the table. We distributed sticky notes
              and markers to encourage active participation. We encouraged
              everyone to share their ideas freely, emphasizing that no idea was
              too wild or unrealistic. We facilitated a lively discussion, where
              we built upon each other's ideas and generated a wide range of
              creative solutions.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                className="docBtn"
                target="_blank"
                href="https://docs.google.com/document/d/1-vwTtU-FxpLy-CieJNAuq3kZt3--zGy4gvaVQOtqpj0/edit#bookmark=id.2kv3uprlxvqd"
              >
                Brainstorming Section in Reading Guide
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
          <Typography sx={{ width: "12%", flexShrink: 0 }}>
            <b>Co-reflection</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>Showroom</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              src={coreflection}
              alt=""
              style={{
                height: "50vh",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <div className="AccordionTitle"> </div>
            <div>{/* <img src={} alt="" /> */}</div>
            <div className="AccordionTitle">
              {" "}
              <b>Why did we conduct coreflection?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              We conducted a co-reflection session for our design challenge
              because it fostered a collaborative environment, allowing us to
              tap into the collective knowledge of our team. We were able to
              gain multiple perspectives and insights, enabling us to identify
              blind spots, uncover hidden opportunities, and challenge our
              assumptions. Co-reflection also helped us evaluate our design
              decisions and processes more effectively, leading to continuous
              improvement and better outcomes. Additionally, by sharing our
              successes and challenges, we built a sense of shared ownership and
              accountability, fostering a stronger team dynamic and enhancing
              our future collaboration. Ultimately, co-reflection was
              instrumental in driving innovation, enhancing our learning, and
              ensuring the overall success of our design project.
            </div>
            <div className="AccordionTitle">
              <b>How did we we conduct coreflection?</b>
            </div>
            <div className="AccordionTextBody">
              To conduct co-reflection for our design project, we had
              collaborative sessions where we brought together team members,
              teachers and our advisors. We created a safe and open environment
              for everyone to share their thoughts and ideas for the new
              playground activity. With our advisors help, we tried to take away
              any biases and be as open minded as possible and really start at
              the core of our project, by evaluating the Cruyff values. The
              Cruyff organization bases all their activities on their core
              values, so we began defining which of those values we personally
              found the most important to base our new playground activity
              around.
            </div>
            <Button
              className="docBtn"
              target="_blank"
              href="https://docs.google.com/document/d/1-vwTtU-FxpLy-CieJNAuq3kZt3--zGy4gvaVQOtqpj0/edit#bookmark=id.3uvdbows7ggm"
            >
              Co-reflection Section in Reading Guide
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
          <Typography sx={{ width: "20%", flexShrink: 0 }}>
            <b>Business Model Canvas</b>
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Stepping Stones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="AccordionTitle">
              <img
                src={bmc}
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
              <b>Why did we create our Business Model Canvas?</b>{" "}
            </div>
            <div className="AccordionTextBody">
              We created a business model canvas for our idea of creating a new
              playground activity because we wanted to thoroughly analyze and
              plan our venture. As a team, we believed that using a research
              method like the business model canvas would help us consider all
              the essential aspects of our idea and make sure that it is
              feasible. We collaboratively brainstormed and identified key
              elements such as customer segments, value propositions, and
              revenue streams. By using the canvas, we could visualize and map
              out our business model, making it easier to understand and
              communicate our concept to our stakeholders and advisors. We
              conducted research, gathered data, and assessed the feasibility of
              our idea. Together, we felt confident that the business model
              canvas provided us with a comprehensive and strategic approach to
              develop our new playground activity.
            </div>
            <div className="AccordionTitle">
              <b>How did we create our Business Model Canvas?</b>
            </div>
            <div className="AccordionTextBody">
              We started creating the business model canvas for the new
              playground by gathering our group around a table. We placed a
              large piece of paper in the center of the room and had one person
              to be our writer. We began by drawing the template for the canvas
              and adding the key elements like customer segments, value
              propositions, channels, and revenue streams. We brainstormed and
              discussed potential target audiences, innovative features, and
              pricing strategies. We adjusted each section of the canvas based
              on our collective knowledge and research. We utilized this
              business model to make sure our idea was comprehensive, feasible
              and aligned with our overall vision for the new playground.
            </div>
            <ButtonGroup
              className="docBtnGroup"
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button className="docBtn" target="_blank" href="https://docs.google.com/document/d/1-vwTtU-FxpLy-CieJNAuq3kZt3--zGy4gvaVQOtqpj0/edit#bookmark=id.21kg70gup3rd">
                Business Model Canvas Section in Reading Guide
              </Button>
            </ButtonGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
