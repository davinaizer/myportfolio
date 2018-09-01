import React, {Component} from 'react';
import { Container, Row, Col, Button } from "reactstrap";

export default class Cover extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="masthead">
        <Container className="d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">Cover</h1>
            <h2 className="mx-auto mt-2 mb-5">
              Laboris mollit cupidatat mollit ut anim consequat in ut fugiat do eu sed cillum minim quis.
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
