import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import { TweenLite, Power1 } from 'gsap';

import '../containers/Cover.scss';

export default class Cover extends Component {
  constructor(props) {
    super(props);
    this.sectionRef = React.createRef();
  }

  componentDidMount() {
    TweenLite.from(this.sectionRef.current, 1, {
      opacity: 0,
      ease: Power1.easeOut,
    });
  }

  render() {
    return (
      <header className="masthead" ref={this.sectionRef}>
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
                Hi. Iʼm Davi, a problem solver who loves helping people come up
                with new ideas and solutions.
              </p>

              <Link to="/about">
                <Button className="cover__btn" color="primary" size="lg">
                  GET TO KNOW
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

Cover.propTypes = {
  onSelect: PropTypes.func,
};
