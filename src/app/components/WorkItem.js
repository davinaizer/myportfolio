import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import AOS from 'aos';

import './WorkItem.scss';
import TagList from './TagList';

export default class WorkItem extends Component {
  constructor(props) {
    super(props);

    AOS.init();
  }

  render() {
    const { id, thumb, title, summary, tags, isFlipped, onSelect } = this.props;

    return (
      <Row
        noGutters
        className="work-item"
        data-aos={'fade-' + (isFlipped ? 'left' : 'right')}
        data-aos-anchor-placement="bottom-bottom"
      >
        <Col md="6">
          <div className="work-item__thumb">
            <a href="#" onClick={evt => onSelect(evt, id)}>
              <img src={thumb} alt={title} />
            </a>
          </div>
        </Col>

        <Col md="6" className={isFlipped && 'order-md-first'}>
          <div
            className={
              'work-item__card ' + (isFlipped && ' work-item__card--flipped')
            }
          >
            <div className="text-lg-left">
              <p className="work-item__title">{title}</p>
              <p className="work-item__body small">{summary}</p>
            </div>

            <Button
              className="work-item__btn"
              size="sm"
              color="secondary"
              onClick={evt => onSelect(evt, id)}
            >
              MORE INFO
            </Button>

            <TagList items={tags} />
          </div>
        </Col>
      </Row>
    );
  }
}
