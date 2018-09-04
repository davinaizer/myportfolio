import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import '../containers/Work.scss';

// import masterheadImg from '../img/bg-masthead.jpg';
import demoImg01 from '../img/demo-image-01.jpg';
import demoImg02 from '../img/demo-image-02.jpg';

export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="work" className="work-section">
        <Container>
          <div className="">
            <h2 className="section__title">Work</h2>
            <hr className="title__separator ml-0" />
          </div>

          <Row noGutters className="justify-content-center mb-5 mb-lg-0">
            <Col lg="6">
              <img className="img-fluid" src={demoImg01} alt="" />
            </Col>

            <Col lg="6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text mx-4 w-100 my-auto text-center text-lg-left">
                    <h4 className="">Elit ut sunt id.</h4>
                    <p className="mb-0">
                      Sunt dolor commodo minim aliquip id in magna aute id sint
                      veniam ex dolor cupidatat labore in proident sit in non
                      occaecat proident id et non enim.
                    </p>
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
                  <div className="project-text mx-4 w-100 my-auto text-center text-lg-right">
                    <h4 className="">Irure aliqua reprehenderit.</h4>
                    <p className="mb-0 ">
                      Lorem ipsum veniam exercitation sint nostrud aute elit
                      tempor irure veniam adipisicing id qui occaecat qui aliqua
                      eiusmod dolore anim id dolor anim esse amet commodo dolor
                      in ullamco ad dolore duis ea.
                    </p>
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
