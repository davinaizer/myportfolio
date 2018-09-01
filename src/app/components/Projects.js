import React, {Component} from 'react';
import { Container, Row, Col } from "reactstrap";

import masterheadImg from "../img/bg-masthead.jpg";
import demoImg01 from "../img/demo-image-01.jpg";
import demoImg02 from "../img/demo-image-02.jpg";

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="projects" className="projects-section bg-light">
        <Container>
          <div className="mx-auto text-center">
            <h2 className="mb-4">Projects</h2>
          </div>

          <Row noGutters className="align-items-center mb-4 mb-lg-5">
            <Col xl="8" lg="7">
              <img className="img-fluid mb-3 mb-lg-0" src={masterheadImg} alt="" />
            </Col>

            <Col xl="4" lg="5">
              <div className="featured-text text-center text-lg-left">
                <h4>Shoreline</h4>
                <p className="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
              </div>
            </Col>
          </Row>

          <Row noGutters className="justify-content-center mb-5 mb-lg-0">
            <Col lg="6">
              <img className="img-fluid" src={demoImg01} alt="" />
            </Col>

            <Col lg="6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="">Misty</h4>
                    <p className="mb-0">An example of where you can put an image of a project, or anything else, along with a description.</p>
                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Row noGutters className="justify-content-center">
            <Col lg="6">
              <img className="img-fluid" src={demoImg02} alt="" />
            </Col>
            <Col lg="6" className="order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="">Mountains</h4>
                    <p className="mb-0 ">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    );
  }
}
