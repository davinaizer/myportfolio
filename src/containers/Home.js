import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components/macro';

import { Section, SectionTitle, TitleSeparator } from '../styles/theme';
import sectionBg from '../assets/cover-bg.jpg';

const Masthead = styled(Section)`
    height: 100vh;
    padding: 5em 0;
    overflow: auto;

    @media (min-width: 576px) {
        padding: 6em 0;
    }
`;

const HomeButton = styled(Button)`
    padding: 15px 30px;
    margin: 50px 0;
`;

const Home = () => (
    <Masthead backgroundImage={sectionBg}>
        <Container className="d-flex h-100">
            <Row>
                <Col sm="8">
                    <SectionTitle className="mb-2">davi naizer</SectionTitle>
                    <TitleSeparator className="ml-0" />
                    <h2 className="mx-auto my-5">
                        E-learning &<br />
                        Front-end Developer
                    </h2>
                    <p>
                        Hi, Iʼve been developing web and e-learning content for almost 18 years now. Throughout these
                        years I had the pleasure to work on many projects along leading companies like Kraft Foods,
                        Electrolux, Volvo Motors, HSBC Bank, Furukawa Electric, GP Strategies, Metlife, Boticário Group
                        and many others.
                        <br />
                        <br />
                        Please feel free to navigate and get to know more about me.
                    </p>
                    <Link to="/about">
                        <HomeButton color="primary" size="lg">
                            GET TO KNOW
                        </HomeButton>
                    </Link>
                </Col>
            </Row>
        </Container>
    </Masthead>
);

export default Home;
