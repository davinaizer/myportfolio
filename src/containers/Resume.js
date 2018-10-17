import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './Resume.scss';

import pdfIcon from '../assets/file-pdf.svg';
import pdfFile from '../assets/201810_cv_davi_naizer.pdf';

const Resume = () => (
  <section id="resume" className="resume-section">
    <Container className="">
      <Row>
        <Col lg="8" className="">
          <h2 className="section__title text-left">Resume</h2>
          <hr className="title__separator ml-0" />
        </Col>
      </Row>

      <Row className="">
        <Col lg="12">
          <a href={pdfFile} target="_blank" rel="noopener noreferrer">
            <Button className="secondary btn-download">
              Download CV
              <img src={pdfIcon} alt="Download Curriculum - PDF" />
            </Button>
          </a>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg="3">
          <h2 className="resume__title">
            work
            <br />
            experience
          </h2>
        </Col>

        <Col className="mx-auto">
          <ul className="timeline">
            <li>
              <p>
                <span className="resume__subtitle">
                  2017-Present
                  <br />
                  FREELANCE FRONT-END DEVELOPER
                </span>
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  2009-2017
                  <br />
                  CO-FOUNDER & DEVELOPMENT MANAGER
                </span>
                <br />
                UNBOX Learning Experience
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  2007-2009
                  <br />
                  LEAD WEB DEVELOPER
                </span>
                <br />
                GPAC Comunicação Integrada
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  2005-2007
                  <br />
                  E-LEARNING DEVELOPER
                </span>
                <br />
                HSBC Bank Brasil
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  2001-2005
                  <br />
                  WEB/ACTIONSCRIPT DEVELOPER
                </span>
                <br />
                GPAC Comunicação Integrada
              </p>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg="3">
          <h2 className="resume__title">education</h2>
        </Col>

        <Col className="mx-auto">
          <ul className="timeline">
            <li>
              <p>
                <span className="resume__subtitle">
                  2007-2010
                  <br />
                  COMPUTER ENGINEERING
                </span>
                <br />
                Positivo University, Curitiba-PR
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  2005-2006
                  <br />
                  ELECTRICAL ENGINEERING
                </span>
                <br />
                Positivo University, Curitiba-PR
              </p>
            </li>
            <li>
              <p>
                <span className="resume__subtitle">
                  1997-2000
                  <br />
                  ELECTRONICS
                </span>
                <br />
                Federal University of Technology - Paraná (UTFPR)
              </p>
            </li>
          </ul>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg="3">
          <h2 className="resume__title">hard skills</h2>
        </Col>

        <Col lg={{ size: 9, offset: 0 }}>
          <span className="resume__subtitle">PROGRAMMING/LANGUAGES</span>
          <p>AS3, JS, HTML, CSS, SCSS, PHP, Java, SQL, OOP, UML</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">FRAMEWORKS/LIBRARIES</span>
          <p>jQuery, BackboneJS, ReactJS, Bootstrap, GSAP</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">SERVER-SIDE/CLOUD</span>
          <p>Linux, LAMP, AWS, EC2</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">DEV TOOLS/IDE</span>
          <p>Sublime Text, VS Code, IntelliJ IDEA</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">DESIGN TOOLS</span>
          <p>
            Photoshop, Illustrator, Flash/Animate, Sketch, Gravit Designer,
            Inkscape
          </p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">E-LEARNING TOOLS</span>
          <p>Adobe Captivate, Articulate Storyline, Moodle LMS</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">VERSION CONTROL</span>
          <p>SVN, GIT (Github, Bitbucket)</p>
        </Col>

        <Col lg={{ size: 9, offset: 3 }}>
          <span className="resume__subtitle">MANAGEMENT</span>
          <p>Trello, Toggl, Microsoft Project, Merlin Project</p>
        </Col>
      </Row>

      <Row className="my-5">
        <Col lg="3">
          <h2 className="resume__title">soft skills</h2>
        </Col>

        <Col lg={{ size: 9, offset: 0 }}>
          <ul>
            <li>Flexibility</li>
            <li>Communication</li>
            <li>Teamworking</li>
            <li>Attention to Detail</li>
            <li>Self-Starter Attitude</li>
            <li>Analytical and Problem Solver</li>
            <li>Quality-oriented</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Resume;
