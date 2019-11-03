import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from 'styled-components/macro';
import { rgba } from 'polished';

import { colors } from '../styles/theme';
import noiseBg from '../assets/black_noise_50.png';
import sectionBg from '../assets/cover-bg.jpg';

const Masthead = styled.header`
    background-attachment: fixed;
    background-image: linear-gradient(${rgba(colors.black, 0)}, ${rgba(colors.black, 1)}), url(${noiseBg}),
        url(${sectionBg});
    background-position: center bottom;
    background-repeat: no-repeat, repeat, no-repeat;
    background-size: auto, auto, cover;

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
    <Masthead>
        <Container className="d-flex h-100">
            <Row>
                <Col sm="8">
                    <h1 className="mb-2">DAVI NAIZER</h1>
                    <hr className="title__separator ml-0" />
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
