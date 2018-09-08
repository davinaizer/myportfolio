import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

import './WorkItem.scss';

export default class WorkItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;
    let isFlipped = props.isFlipped;

    return (
      <Row noGutters className="work-item">
        <Col md="6">
          <div className="work-item__thumb">
            <img src={props.src} alt="" />
          </div>
        </Col>

        <Col md="6" className={isFlipped ? 'order-md-first' : ''}>
          <div
            className={
              'work-item__card ' + (isFlipped ? 'work-item__card--flipped' : '')
            }>
            <div className="d-flex h-100">
              <div className="w-100 text-lg-left">
                <p className="work-item__title">Elit ut sunt id.</p>
                <p className="work-item__body small">
                  Sunt dolor commodo minim aliquip id in magna aute id sint
                  veniam ex dolor cupidatat labore in proident sit in non
                  occaecat proident id et non enim.
                </p>
              </div>

              <div className="work-item__tags">
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
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
