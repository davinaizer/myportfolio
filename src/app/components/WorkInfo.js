import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, UncontrolledCarousel } from 'reactstrap';
import { TagList, LinkList } from './';

import './WorkInfo.scss';

export default class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  createMarkup(value) {
    return { __html: value };
  }

  render() {
    // debugger;
    const { data, match } = this.props;
    const workData = data[parseInt(match.params.id)];
    const { title, description, images, links, tags } = workData;
    const gallery = images.gallery.map(item => ({
      src: item,
      caption: '',
    }));

    return (
      <section id="work-info" className="work-info-section">
        <Container className="work-info">
          <Row>
            <Col sm={12} className="work__header">
              <div className="my-5">
                <Link to={'/work'}>
                  <Button color="primary">Back</Button>
                </Link>
              </div>

              <TagList items={tags} />
            </Col>

            <Col sm={12}>
              <h2 className="section__title">{title}</h2>
              <hr className="title__separator ml-0" />

              <UncontrolledCarousel
                className="work-info__gallery"
                items={gallery}
              />

              <div className="work-info__description">
                <p dangerouslySetInnerHTML={this.createMarkup(description)} />
              </div>

              <LinkList className="work-info__links" items={links} />
            </Col>

            <Col sm={12} className="work-info__footer text-center">
              <hr />
              <Link to={'/work'}>
                <Button className="" color="primary">
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

WorkInfo.propTypes = {
  data: PropTypes.array,
  match: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.object,
  links: PropTypes.object,
  tags: PropTypes.object,
};
