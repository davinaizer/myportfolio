import React from "react";
import { Container, Row, Col } from "reactstrap";

import ipadImg from "../img/ipad.png";

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about" className="about-section text-center">
        <Container>
          <Row>
            <Col lg="8" className="mx-auto">
              <h2 className="mb-4">Built with Bootstrap 4</h2>
              <p className="">
                Grayscale is a free Bootstrap theme created by Start Bootstrap.
                It can be yours right now, simply download the template on
                <a href="http://startbootstrap.com/template-overviews/grayscale/">
                  the preview page
                </a>
                . The theme is open source, and you can use it for any purpose,
                personal or commercial.
              </p>
            </Col>
          </Row>
          <img src={ipadImg} className="img-fluid" alt="" />
        </Container>
      </section>
    );
  }
}
