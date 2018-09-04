import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import '../styles/_variables.scss';
import '../containers/Resume.scss';

export default class Resume extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
                I’ve been working with web-based applications, multimedia
                materials and educfor almost since 2001. Being Macromedia Flash
                my main development tool. For 4 years I worked at an advertising
                agency (GPAC) as a Web Developer/Programmer and the materials I
                developed were mostly related to training (e-Learnings, e-Books,
                e-Presentations).
              </p>
            </Col>
            <Col xs="12" sm="6" className="">
              <p>
                Great part of these jobs were developed to HSBC and almost all
                of them used Flash technology. After all these years of
                professional relationship with HSBC, I was invited to join the
                Training & Development area in 2005. During this year as a HSBC
                employee, I had the opportunity to develop many important jobs
                and support the area finding the needs and creating solutions
                that weren’t possible before (See portfolio).
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm="3">
              <h2 className="resume__title">work<br />
              experience</h2>
            </Col>
            <Col className="mx-auto">
            <ul></ul>
              <p>
                CO-FOUNDER AND EDUCATIONAL TECH MANAGER
                <br />
                UNBOX Learning Experience
                <br />
                <br />
                LEAD WEB/e-LEARNING DEVELOPER
                <br />
                GPAC Comunicação Integrada
                <br />
                <br />
                EDUCATIONAL TECH DEVELOPER
                <br />
                HSBC Bank Brasil
                <br />
                <br />
                WEB/e-LEARNING DEVELOPER
                <br />
                GPAC Comunicação Integrada
                <br />
                <br />
                COMPUTER TECHNICIAN
                <br />
                Omni Informática
              </p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm="3">
              <h2 className="resume__title">education</h2>
            </Col>
            <Col className="mx-auto">
              <p><span className="resume__subtitle">COMPUTER ENGINEERING</span><br />
              Universidade Positivo, Curitiba-PR</p>
              <p><span className="resume__subtitle">ELECTRICAL ENGINEERING</span><br />
              Universidade Positivo, Curitiba-PR</p>
              <p><span className="resume__subtitle">ELECTRONICS</span><br />
              Federal University of Technology - Paraná (UTFPR)</p>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col sm="3">
              <h2 className="resume__title">skills</h2>
            </Col>
            <Col>
              <p className="resume__subtitle">SOFTWARES</p>
              <p>Adobe PhotoShop
              Adobe Premiere
              Microsoft SQL SERVER 7
              Macromedia Dreamweaver
              Macromedia Flash
              Windows NT
              Linux Conectiva, Linux Red Hat
              Mac OS</p>
            </Col>
            <Col>
              <p className="resume__subtitle">DEV TOOLS</p>
              <p>Adobe PhotoShop
              Adobe Premiere
              Microsoft SQL SERVER 7
              Macromedia Dreamweaver
              Macromedia Flash
              Windows NT
              Linux Conectiva, Linux Red Hat
              Mac OS</p>
            </Col>
            <Col>
              <p className="resume__subtitle">LANGUAGES</p>
              <p>ActionScript 3 (OOP)
              ASP
              SQL
              XML
              HTML
              JavaScript
              C</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
