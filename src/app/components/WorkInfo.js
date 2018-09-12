import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import './WorkInfo.scss';
import coverImg from '../img/works/work_02_01.jpg';
import img01 from '../img/works/work_02_02.jpg';
import img02 from '../img/works/work_02_03.jpg';
import img03 from '../img/works/work_02_04.jpg';

export default class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <Container className="work-info">
        <div className="work-info__tags">
          <div className="tag-item">HTML</div>
          <div className="tag-item">JS</div>
          <div className="tag-item">SASS</div>
          <div className="tag-item">BackboneJS</div>
          <div className="tag-item">React</div>
          <div className="tag-item">Node.JS</div>
          <div className="tag-item">Express</div>
          <div className="tag-item">RequireJS</div>
          <div className="tag-item">GSAP</div>
          <div className="tag-item">GULP</div>
          <div className="tag-item">Webpack 4</div>
        </div>

        <div>
          <h2 className="section__title">Project Title</h2>
          <h3 className="section__subtitle">Project Subtitle</h3>
          <hr className="title__separator ml-0" />
        </div>

        <div>
          <img className="work-info__cover" src={coverImg} />
        </div>

        <div className="work-info__description">
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            tincidunt, massa congue laoreet commodo, sem neque feugiat dui,
            faucibus congue diam purus accumsan libero. Sed non mauris in justo
            gravida malesuada nec ac tellus. Ut id eleifend justo. Suspendisse
            dignissim ligula lorem, vel varius ipsum convallis quis. In lobortis
            dui a elit sodales tincidunt ac tempus dolor.
          </p>
        </div>

        <div className="work-info__links">
            <Button color="secondary">Live Preview</Button>
            <Button color="secondary">GitHub</Button>
            <Button color="secondary">Bitbucket</Button>
        </div>

        <Row className="work-info_gallery">
          <Col md="6">
            <img src={coverImg} />
          </Col>
          <Col md="6">
            <img src={img01} />
          </Col>
          <Col md="6">
            <img src={img02} />
          </Col>
          <Col md="6">
            <img src={img03} />
          </Col>
        </Row>

        <div className="work-info__footer">
          <hr />
        </div>
      </Container>
    );
  }
}
