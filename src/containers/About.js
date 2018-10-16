import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import './About.scss';

const About = () => (
  <section id="about" className="about-section">
    <Container>
      <Row className="justify-content-end">
        <Col md="6">
          <h2 className="section__title text-right">About</h2>
          <hr className="title__separator mr-0" />
          <p className="text-justify">
            I’m a simple person who enjoys simple things of life. A good coffee
            and a good music, and it’s all set to work. If I’m not coding,
            studying or researching better ways to work, I’m cooking, preparing
            a espresso or spending free time with my wife and daughter. I’m also
            a problem-solver/fixer type of guy. I love to fix things, repair and
            help people. It doesn’t matter the subject, I’m always ready to give
            a hand.
            <br />
            <br />I started in the tech world at the age of 8, on a Intel 80386,
            coding in Microsoft’s BASIC. My first job was at the age of 14,
            working as a Computer Technician. After that, I worked in a lot of
            other companies, learning many different skills and doing things
            like: Network, Linux and Windows Server administration, Web
            development (front and back-end), e-Learning and multimedia
            development, Web project management.
            <br />
            <br />
            During almost six years I worked at an advertisement agency. At
            beginning I was the IT guy, but in less than one year I moved to Web
            Development department. Having the opportunity work with big brands,
            such as Kraft Foods, Volvo Motors, HSBC Bank, Boticário Group, and
            many others, I developed many different disciplines and skills. I
            developed from presentations, Web-based application, e-Learnings, to
            Web Apps. When I left this job, I was the Lead Web Developer.
            <br />
            <br />
            In 2009 I started my own company with another two designers as
            partners. Our main goal was to deliver high quality and
            user-oriented solutions for design and online learning. During
            almost 8 years, and thousand of successful projects, I developed my
            career in many ways. Having your own company changes you, for the
            better. It changed me from a Web Developer to a professional who
            understands the client needs and budget, B2B, human resources,
            project management, entrepreneurship, finances, accounting, business
            laws, etc.
            <br />
            <br />
            Currently, I work as a freelance E-learning and Front-end Developer
            in Curitiba/PR, Brazil.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;