import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

export default class Cover extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <Container className="d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Grayscale</h1>
            <h2 className="mx-auto mt-2 mb-5">
              A free, responsive, one page Bootstrap theme created by Start
              Bootstrap.
            </h2>
            <a href="#about" className="btn btn-primary js-scroll-trigger">
              Get Started
            </a>
          </div>
        </Container>
      </header>
    );
  }
}
