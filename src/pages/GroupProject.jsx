import React, { Component } from "react";
import { Element, Link } from "react-scroll";
import Footer from "../components/Footer.jsx";
import { TypeAnimation } from "react-type-animation";

import Navbar from "../components/Navbar.jsx";
import ControlledAccordionGroup from "../components/CollapsibleCardGroup.jsx";
import "./css/GroupProject.css";
import "./css/MyProjects.css";

import c4 from "../images/c4diagram.jpg";

export default class GroupProject extends Component {
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
                  C4 Diagram
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
                  CMD Methods
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
                Nowadays, most young people are devoting a substantial amount of
                time on the internet, some of them spreading over three hours
                per day, and a considerable proportion of them are online all
                day long. This shows that digital communication is an essential
                tool for connecting with the youth. While digital youth
                activities, such as gaming and programming, are already popular,
                online youth work is still largely non-existent. The challenge
                for this project is to find a means of connecting youth workers
                with youth online, without crossing professional and personal
                boundaries (from the social workers perspective). To achieve
                this goal, we have conducted research, brainstorming, design,
                and development which will be further discussed in this reading
                guide.{" "}
              </p>
            </div>
            <TypeAnimation
              sequence={[1000, "Our Final Concept"]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2em",
                display: "inline-block",
                marginTop: "8vw",
                marginBottom: "3vh",
                top: "50%",
                right: "50%",
              }}
            />
            <div className="IndividualLText">
              <p className="textIndividual indent">
                As our final concept, we devised a solution in the form of an
                educational platform catered to youth workers. The main
                objective of this platform is to enhance their online
                communication skills, enabling them to effectively engage with
                youth in the digital world. Initially, the platform will be a
                website offering social workers the ability to select their
                preferred social media platforms (TikTok, Instagram, Discord,
                and Snapchat) and access lessons presented through text and
                visuals. These lessons will conclude with assessments, covering
                various topics such as content creation, community building, and
                identifying potential risks. In cases where youth workers are
                unsure about which platform to start with, they can take a quiz
                to determine their archetype. Each archetype corresponds to a
                specific type of social worker, tailoring their learning journey
                on the platform to address their knowledge gaps and
                requirements. For example, content creators will focus on
                content creation lessons across different social media platforms
                before moving on to other relevant topics. It is important to
                note that users cannot select multiple archetypes
                simultaneously. Upon completion of each topic or the entire
                curriculum for a specific social media platform, social workers
                will receive a certificate of completion. This certificate can
                be showcased on their profile or presented to supervisors and
                colleagues, serving as a validation of their proficiency and
                dedication to enhancing their skills in the digital landscape.
              </p>
            </div>
          </Element>

          <Element
            name="element2"
            className="portfolio"
            style={{
              marginBottom: "30vh",
            }}
          ></Element>

          <TypeAnimation
            sequence={[1000, "Research Questions"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginBottom: "3vh",
             
            }}
          />
          <div className="IndividualLText">
            <p className="indent">
              The first step in our research phase was to create a main research
              question and sub research questions to create a guide of what
              factors of youth work and the online world that we will examine
              throughout this project. Our main research question was:
            </p>
            <b
              className="indent"
              style={{
                display: "inline-block",
                marginTop: "1vw",
                marginBottom: "2vw",
              }}
            >
              “How can social workers from Eindhoven relate and connect to the
              online world of youth while countering the cons of online media?”
            </b>
            <p
              className="indent"
              style={{
                marginBottom: "2vw",
              }}
            >
              The following sub questions were used as more specific goals that
              would support the main goal outlined in the main research
              question. The methods used to answer each question and a summary
              of the conclusion/results of using the CMD methods can be found
              below each sub question:
            </p>
            <ol style={{ pointerEvents: "none", listStyleType: "upper-roman" }}>
              <li className="researchQuestions">
                <b>What does youth work do?</b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study, Expert
                  Interview
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> What is youth work?,
                  Areas where youth work can be integrated
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  To answer this sub question, we decided that it would be wise
                  to not only research what the role of a youth worker is, but
                  to also speak with real life youth workers to make sure we
                  were covering all of their needs. Through our research, we
                  decided to define youth work as a term encompassing many
                  different activities that support and engage young people, and
                  it can be delivered by trained professionals or volunteers in
                  a variety of settings. The main aims of youth work are to
                  promote positive youth development, encourage social
                  incorporation and well-being, and empower young people to
                  shape their own futures.
                </div>
              </li>
              <li className="researchQuestions">
                <b>
                  Who are the social workers and what are their main tasks in
                  their job?
                </b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study, Expert
                  Interview, Personas
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> What is a social
                  worker?, What kidneys of social workers are there?, What is
                  the role of a social worker?
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  We utilized two methods to address this question, literature
                  study and expert interviews. We wanted , but also we wanted to
                  speak to Dynamos and Pitstops youth workers to better
                  understand their specific tasks as we were focusing on finding
                  a solution for youth workers in Eindhoven primarily. From our
                  literature study, we defined youth workers as a trained
                  professional that caters to the well-being of the youth. They
                  may work in different environments like at schools, government
                  agencies, and youth agencies. They can also specialize in a
                  particular area of practice such as child welfare or mental
                  health.We also gained some useful insights from the expert
                  interviews like the fact that Dynamo already has some youth
                  workers, called Digicoaches, that focus their efforts in the
                  online world. We were also able to define two different youth
                  worker personas with our findings, the first being a younger
                  social worker that is familiar with the online world (like a
                  Digicoach from Dynamo)and the other being an older social
                  worker that is scared of the dangers of being online.
                </div>
              </li>
              <li className="researchQuestions">
                <b>
                  What are the most used social platforms for youth
                  internationally and in the Netherlands?
                </b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study, Trend Analysis,
                  Online Analytics
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> Statistics of Social
                  Media Use in the Netherlands, Worldwide Statistics of Social
                  Media Use, Favorite social medias of different age groups
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  Through literary research and looking at online analytics, we
                  were able to determine the social media we felt like it was
                  not only the most popular but the most beneficial platform for
                  youth workers to conduct online youth work on. These were
                  Instagram, Tiktok, Discord and Snapchat. In the beginning, we
                  had not included Snapchat as a social media to focus on as it
                  is not as popular as it once was worldwide. However, it is
                  still quite popular in the Netherlands and after speaking to
                  our stakeholder and Matheus, a youth worker at Pitstop, we
                  came to the agreement to add it too as they were already
                  utilizing Snapchat as a way to gain insights on dangerous
                  activities happening in their neighborhoods. These methods
                  they used on Snapchat could be very useful for other social
                  workers to learn about and implement in their own cities.
                </div>
              </li>
              <li className="researchQuestions">
                <b>
                  What does other international youth work currently do to reach
                  out to the youth?
                </b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> Youth work in Brazil,
                  Efforts of online youth work in Brazil
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  As a group, we all wanted to address this question. We decided
                  that instead of having one group member focusing on this
                  question we could all pick a country and research their
                  respective youth work organizations and their approach to
                  youth work. I focused on youth work in Brazil. My research
                  aimed to examine the way that youth work is organized in
                  Brazil, both at a general level and within specific
                  organizations. The ultimate finding of this study is that
                  youth work in Brazil trails significantly behind in terms of
                  online presence, with most organizations heavily relying on
                  traditional word-of-mouth methods. While some organizations
                  possess their own platforms, it appears that these platforms
                  have not received recent updates or improvements. They also
                  depend a lot of community efforts and donations, as many of
                  these youth centers are started because of a real necessity
                  int he community.
                </div>
              </li>
              <li className="researchQuestions">
                <b>What are the pros and cons of social media?</b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> Effects of Social Media,
                  Benefits of being on social media, negative impact of social
                  media on the youth
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  To better understand the pros and cons of social media, we
                  found it best to conduct literary research to find expert
                  opinions on the topic and not to rely solely on our own points
                  of view. Through the literary research done, we were able to
                  highlight some of the benefits of social media like being able
                  to communicate with family and friends around the world, can
                  be a source of entertainment, could be used as an outlet for
                  creativity, and creates many new employment opportunities for
                  people. However, like with most things, it is important to
                  note that there are also many things that can be viewed as
                  bad/dangerous about social media. Some of these are over or
                  misuse of social media can cause Depression and anxiety if
                  social media interaction is prioritized over in-person
                  relationships, self image issues, can be used as a distraction
                  from work, and cause feelings of loneliness. There is also the
                  very large issue of cyber bullying which is still very
                  unregulated and one of the most significant negative outcomes
                  of social media.
                </div>
              </li>
              <li className="researchQuestions">
                <b>
                  How can we present social workers to the youth in the most
                  reliable way?
                </b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study, Brainstorming
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> Organizational Trust,
                  Reliability in Youth Work, Trust in Governmental Organizations
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  To answer this question, we utilized the literature study
                  method to have a concrete understanding on the main factors
                  that influence a person to judge how reliable they think an
                  organization is. By reading through the following study, 2019
                  Edelman Trust Barometer Special Report Brand Trust, we were
                  able to distinguish the three main factors that affect brand
                  and organization trustworthiness and reliability:
                  <ol style={{ listStyleType: "decimal" }}>
                    <li>The product/service experience</li>
                    <li>
                      User's Journey - from discovering the brand to using the
                      service/product
                    </li>
                    <li>The organizations/brand's impact on society</li>
                  </ol>
                  It is important to remember that at the end of the day, people
                  will view a youth center as an organization and if it has any
                  ties to the government/governmental organizations, that can
                  have a huge impact on the way they are perceived. After
                  conducting this literary research, we began brainstorming to
                  make sure our final concept would be presenting social work
                  and youth workers in the most reliable and trustworthy way.
                </div>
              </li>
              <li className="researchQuestions">
                <b>
                  How can we educate social workers on the use of online media?
                </b>
                <div className="researchQuestionsSection">
                  <b>CMD Methods Explored:</b> Literature Study, Brainstorming,
                  Prototyping, Testing
                </div>
                <div className="researchQuestionsSection">
                  <b>Example of Key Research Terms:</b> Best methods to educate
                  people online, what do social workers still need to know?
                </div>
                <div className="researchQuestionsSection">
                  <b>Conclusion to Question:</b>
                  To best address this research question, we conducted another
                  literary study to gather some insights on how we should
                  approach designing and developing an educational platform. One
                  of our main findings was the importance of adding elements of
                  gamification to any kind of online platform, but specifically
                  for educational platforms. Nowadays, people have lower
                  attention spans and many kinds of digital distractions. We
                  wanted to find the best solution to the present issue, and we
                  realized that adding elements of gamification like quests,
                  awards, encouraging visuals and a personalized element(feeling
                  like you have a course made just for you when selecting an
                  archetype.)We also received feedback in our testing sessions
                  these gamified features were a nice addition to our platform,
                  which some even saying that this would motivate for them to
                  keep using and coming back to the platform regularly.
                </div>
              </li>
            </ol>
          </div>

          <Element
            name="element3"
            className="portfolio"
            style={{
              marginBottom: "20vh",
            }}
          ></Element>

          <TypeAnimation
            sequence={[1000, "C4 Diagram"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginTop: "10vh",
              marginBottom: "3vh",
            }}
          />
          <img
            src={c4}
            alt=""
            style={{
              height: "70vh",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <div className="IndividualLText">
            <p className="textIndividual indent">
              To successfully have an overview of our systems structure, our
              group created a C4 Diagram. A C4 diagram is created to gain a
              clear and concise overview of the software architecture of a
              system, facilitating effective communication and understanding
              among stakeholders who might not have technological experience. It
              helps visualize the system's components, their interactions, and
              the overall structure. In the beginning, we had some trouble when
              first creating the diagrams individually. Therefore we decided to
              work together to create the most detailed and accurate C4 Diagram.
            </p>
          </div>

          <Element
            name="element4"
            className="portfolio"
            style={{
              marginBottom: "30vh",
            }}
          ></Element>

          <TypeAnimation
            sequence={[1000, "CMD Methods Used"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              marginTop: "10vh",
              marginBottom: "3vh",
            }}
          />

          <ControlledAccordionGroup />

          <Element
            name="element5"
            className="portfolio"
            style={{
              marginBottom: "30vh",
            }}
          ></Element>

          <TypeAnimation
            sequence={[1000, "Reading Guide"]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{
              fontSize: "2em",
              display: "inline-block",
              
              marginBottom: "5vh",
            }}
          />
          <p className="mainBodyText">
            My Reading Guide for this project can be found by clicking the
            button below!
          </p>
          <div className="contact-form-grid-item-submit">
            <a href="https://docs.google.com/document/d/1jmV1T667pl3RKBXl9KvDaNIDYxvI0KFuW8QyTTzBI6E/edit?usp=sharing">
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
