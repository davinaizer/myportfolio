import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './Resume.scss';

const Resume = () => (
  <section id="resume" className="resume-section">
    <Container className="">
      <Row>
        <Col lg="8" className="">
          <h2 className="section__title text-left">Resume</h2>
          <hr className="title__separator ml-0" />
        </Col>
      </Row>

      <Row className="text-justify">
        <Col xs="12" sm="6" className="">
          <p>
            I&#x27;ve been creating web and learning content for almost 18 years
            now. I worked on many projects over these years along big companies
            like Kraft Foods Brasil, Electrolux Sweden, Volvo Motors, HSBC Bank,
            Furukawa Electric, GP Strategies, Metlife Brasil, O Boticário and
            many others.
          </p>
        </Col>
        <Col xs="12" sm="6" className="">
          <p>
            As a tech enthusiast and an eager learner, I&#x27;m always looking
            for new tools and ways to improve mine and team&#x27;s quality of
            life. If I need to learn something new, no problem, just give some
            time and I will do my best.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md="3">
          <h2 className="resume__title">education</h2>
        </Col>
        <Col className="mx-auto">
          <p>
            <span className="resume__subtitle">
              2007-2010
              <br />
              COMPUTER ENGINEERING
            </span>
            <br />
            Positivo University, Curitiba-PR
          </p>
          <p>
            <span className="resume__subtitle">
              2005-2006
              <br />
              ELECTRICAL ENGINEERING
            </span>
            <br />
            Positivo University, Curitiba-PR
          </p>
          <p>
            <span className="resume__subtitle">
              1997-2000
              <br />
              ELECTRONICS
            </span>
            <br />
            Federal University of Technology - Paraná (UTFPR)
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md="3">
          <h2 className="resume__title">
            work
            <br />
            experience
          </h2>
        </Col>

        <Col className="mx-auto">
          <div className="resume__subtitle">
            2017-Present
            <br />
            FREELANCE FRONT-END DEVELOPER
          </div>
          <br />
          <div className="resume__subtitle">
            2009-2017
            <br />
            CO-FOUNDER & DEVELOPMENT MANAGER
          </div>
          UNBOX Learning Experience
          <br />
          <br />
          <div className="resume__subtitle">
            2007-2009
            <br />
            LEAD WEB DEVELOPER
          </div>
          GPAC Comunicação Integrada
          <br />
          <br />
          <div className="resume__subtitle">
            2005-2007
            <br />
            E-LEARNING DEVELOPER
          </div>
          HSBC Bank Brasil
          <br />
          <br />
          <div className="resume__subtitle">
            2001-2005
            <br />
            WEB/ACTIONSCRIPT DEVELOPER
          </div>
          GPAC Comunicação Integrada
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md="3">
          <h2 className="resume__title">skills</h2>
        </Col>

        <Col md={{ size: 9, offset: 0 }}>
          <span className="resume__subtitle">PROGRAMMING/LANGUAGES</span>
          <p>AS3, JS, HTML, CSS, SCSS, PHP, Java, SQL, OOP, UML</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">FRAMEWORKS/LIBRARIES</span>
          <p>jQuery, BackboneJS, ReactJS, Bootstrap, GSAP</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">SERVER-SIDE/CLOUD</span>
          <p>Linux, LAMP, AWS, EC2</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">DEV TOOLS/IDE</span>
          <p>Sublime Text, VS Code, IntelliJ IDEA</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">DESIGN TOOLS</span>
          <p>
            Photoshop, Illustrator, Flash/Animate, Sketch, Gravit Designer,
            Inkscape
          </p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">E-LEARNING TOOLS</span>
          <p>Adobe Captivate, Articulate Storyline, Moodle LMS</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">VERSION CONTROL</span>
          <p>SVN, GIT (Github, Bitbucket)</p>
        </Col>

        <Col md={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">MANAGEMENT</span>
          <p>Trello, Toggl, Microsoft Project, Merlin Project</p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Resume;
