import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Section, SectionTitle, TitleSeparator } from '../styles/theme';
import sectionBg from '../assets/about-bg.jpg';

const About = () => (
    <Section backgroundImage={sectionBg}>
        <Container>
            <Row className="justify-content-end">
                <Col md="6">
                    <SectionTitle className="text-right">About</SectionTitle>
                    <TitleSeparator className="mr-0" />
                    <p className="text-justify">
                        I’m a simple person who enjoys simple things of life. A good coffee and a good music, and it’s
                        all set to work. If I’m not coding, studying or researching better ways to work, I’m cooking,
                        preparing an espresso or spending free time with my family. I’m also a problem-solver/fixer type
                        of guy. I love fixing things and helping people. It doesn’t matter the problem, I’m always ready
                        to give a hand.
                        <br />
                        <br />
                        I’ve been creating web and e-learning content for almost 18 years now. I started in the tech
                        world on an Intel 80386 at the age of 8, coding in Microsoft BASIC. As a professional I’m
                        experienced in different languages and tools: AS3, ASP, PHP, SQL, Javascript (React),
                        among others. JS being the one I used the most throughout the years. Having worked
                        closely with different professionals such as UX/UI designers, instructional designers,
                        copywriters, frontend and backend developers, I acquired valuable knowledge on how to combine
                        technical, business and user requirements into creative and efficient products.
                        <br />
                        <br />
                        After 8 years working in web development and e-learning industry, I started my own company in
                        2009, through which I had the pleasure to work with companies such as Kraft Foods, Electrolux,
                        Volvo Motors, HSBC Bank, Furukawa Electric, GP Strategies, Metlife, Boticário Group. During this
                        time I developed a broad range of skills: team-leading, mentoring, project management,
                        entrepreneurship, finances, accounting, business laws and others. For more than 7 years, I
                        planned, collaborated with teams and managed hundreds of successful e-learning, web and digital
                        design projects with great commitment to deliver high-quality designs and products to the
                        customers.
                        <br />
                        <br />
                        Currently, I live in London/UK and work as a Front-end Developer for{' '}
                        <a href="https://www.gamesysgroup.com/" target="_blank" rel="noopener noreferrer">
                            Gamesys
                        </a>
                        .
                    </p>
                </Col>
            </Row>
        </Container>
    </Section>
);

export default About;
