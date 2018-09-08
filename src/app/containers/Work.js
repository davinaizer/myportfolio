import React, {Component} from 'react';
import {Container} from 'reactstrap';

import '../img/work-bg.jpg';
import '../containers/Work.scss';

import WorkItem from '../components/WorkItem';

import demoImg01 from '../img/works/work_02_tumb.jpg';
import demoImg02 from '../img/works/work_03_tumb.jpg';
import demoImg03 from '../img/works/work_04_tumb.jpg';

export default class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="work" className="work-section">
        <Container>
          <div className="mb-5">
            <h2 className="section__title">Work</h2>
            <hr className="title__separator ml-0" />
            <p className="section__subtitle">
              In this page, you can find a small selection* of projects that I
              worked on as a Developer, Team Lead or Project Manager.
              <br />
              <br />* Unfortunately, some of the projects are copyrighted or
              covered by a non-disclosure agreement and cannot be made
              available.
            </p>
          </div>

          <WorkItem src={demoImg01} />
          <WorkItem src={demoImg02} isFlipped />
          <WorkItem src={demoImg03} />
          <WorkItem src={demoImg01} isFlipped />
        </Container>
      </section>
    );
  }
}
