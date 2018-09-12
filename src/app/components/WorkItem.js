import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';

import './WorkItem.scss';
import TagList from './TagList';

export default class WorkItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { thumb, title, description, tags, isFlipped, onSelect } = this.props;

    return (
      <Row noGutters className="work-item">
        <Col md="6">
          <div className="work-item__thumb">
            <a href="#" onClick={onSelect}>
              <img src={'img/' + thumb} alt={title} />
            </a>
          </div>
        </Col>

        <Col md="6" className={isFlipped && 'order-md-first'}>
          <div
            className={
              'work-item__card ' + (isFlipped && ' work-item__card--flipped')
            }
          >
            <div className="">
              <div className="text-lg-left">
                <p className="work-item__title">{title}</p>
                <p className="work-item__body small">{description}</p>
              </div>
            </div>

            <Button
              className="work-item__btn"
              size="sm"
              color="secondary"
              onClick={onSelect}
            >
              MORE INFO
            </Button>

            <TagList tags={tags} />
          </div>
        </Col>
      </Row>
    );
  }
}
