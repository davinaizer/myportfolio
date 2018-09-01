import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";

import ipadImg from "../img/ipad.png";

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about" className="about-section text-center">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <h2 className="mb-5">About</h2>
              <p className="">
                Ut ex in exercitation dolor non esse cillum ad non nulla in labore esse ea est magna dolor officia ex ea cillum et consectetur anim ex incididunt id aliquip dolor aliqua enim anim et.
              </p>
            </Col>
          </Row>
          <img src={ipadImg} className="img-fluid" alt="" />
        </Container>
      </section>
    );
  }
}
