import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TagList from './TagList';

import './WorkItem.scss';

const WorkItem = ({ id, thumb, title, summary, tags, isFlipped }) => (
  <Row noGutters className="work-item">
    <Col md="6">
      <div className="work-item__thumb">
        <Link to={'/work/' + id}>
          <img src={thumb} alt={title} />
        </Link>
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

        <Link to={'/work/' + id}>
          <Button className="work-item__btn" size="sm" color="secondary">
            MORE INFO
          </Button>
        </Link>

        <TagList items={tags} />
      </div>
    </Col>
  </Row>
);

WorkItem.propTypes = {
  id: PropTypes.number,
  thumb: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.object,
  isFlipped: PropTypes.bool,
};

export default WorkItem;
