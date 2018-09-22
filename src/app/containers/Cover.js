import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'reactstrap';

import '../containers/Cover.scss';

export default class Cover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <Container className="d-flex h-100 align-items-center">
          <Row>
            <Col sm="8">
              <h1 className="mb-2">DAVI NAIZER</h1>
              <hr className="title__separator ml-0" />
              <h2 className="mx-auto my-5">
                Front-end Web Developer
                <br />
                E-Learning Developer
              </h2>
              <p className="mb-5">
                Hello. Iʼm Davi, a problem solver who loves helping people come
                up with new ideas and solutions.
              </p>
              <a href="#about">
                <Button className="cover__btn" color="primary" size="lg">GET TO KNOW</Button>
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
