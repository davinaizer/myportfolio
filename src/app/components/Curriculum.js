import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";

export default class Curriculum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="curriculum" className="curriculum-section text-center">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <h2 className="mb-4">Curriculum</h2>
              <p className="">
                Ut ex in exercitation dolor non esse cillum ad non nulla in labore esse ea est magna dolor officia ex ea cillum et consectetur anim ex incididunt id aliquip dolor aliqua enim anim et.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
