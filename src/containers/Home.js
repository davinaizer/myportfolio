import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import './Home.scss';

const Home = () => (
  <header className="masthead">
    <Container className="d-flex h-100">
      <Row>
        <Col sm="8">
          <h1 className="mb-2">DAVI NAIZER</h1>
          <hr className="title__separator ml-0" />
          <h2 className="mx-auto my-5">
            E-learning Developer
            <br />
            Front-end Developer
          </h2>
          <p>
            Hi. Iʼm Davi Naizer, a problem solver who loves helping people come
            up with ideas and solutions.
          </p>
          <p>
            Iʼve been developing web and e-learning content for almost 18 years
            now. Iʼve worked on many projects throughout these years along
            leading companies like Kraft Foods, Electrolux, Volvo Motors, HSBC
            Bank, Furukawa Electric, GP Strategies, Metlife, Boticário Group and
            many others.
          </p>
          <Link to="/about">
            <Button className="home__btn" color="primary" size="lg">
              GET TO KNOW
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </header>
);

export default Home;
