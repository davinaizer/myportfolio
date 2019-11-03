import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

import { colors } from '../styles/theme';
import noiseBg from '../assets/black_noise_50.png';
import sectionBg from '../assets/about-bg.jpg';

const AboutSection = styled.section`
    background-attachment: fixed;
    background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
        url(${sectionBg});

    background-position: center top;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;
`;

const About = () => (
    <AboutSection id="about">
        <Container>
            <Row className="justify-content-end">
                <Col md="6">
                    <h2 className="section__title text-right">About</h2>
                    <hr className="title__separator mr-0" />
                    <p className="text-justify">
                        I’m a simple person who enjoys simple things of life. A good coffee and a good music, and it’s
                        all set to work. If I’m not coding, studying or researching better ways to work, I’m cooking,
                        preparing an espresso or spending free time with my wife and daughter. I’m also a
                        problem-solver/fixer type of guy. I love fixing things and helping people. It doesn’t matter the
                        problem, I’m always ready to give a hand.
                        <br />
                        <br />
                        I’ve been creating web and e-learning content for almost 18 years now. I started in the tech
                        world on an Intel 80386 at the age of 8, coding in Microsoft BASIC. As a professional I’m
                        experienced in different languages and tools: ActionScript 3, Java, ASP, PHP, SQL, Javascript,
                        among others. AS3 and JS being the ones I used the most throughout the years. Having worked
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
                        Currently, I live in London/UK and work as a Frontend Developer for the Marketing Design team at{' '}
                        <a href="https://www.gamesyscorporate.com/" target="_blank" rel="noopener noreferrer">
                            Gamesys
                        </a>
                        .
                    </p>
                </Col>
            </Row>
        </Container>
    </AboutSection>
);

export default About;
