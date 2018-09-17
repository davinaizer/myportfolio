import React, { Component } from 'react';
import { Container, UncontrolledCarousel } from 'reactstrap';

import TagList from './TagList';
import LinkList from './LinkList';

import './WorkInfo.scss';

export default class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  createMarkup(value) {
    return { __html: value };
  }

  render() {
    const { title, description, images, links, tags } = this.props.data;

    const gallery = images.gallery.map((item, index) => ({
      src: item,
      caption: '',
    }));

    return (
      <Container className="work-info">
        <TagList items={tags} />

        <h2 className="section__title">{title}</h2>
        <hr className="title__separator ml-0" />

        <UncontrolledCarousel className="work-info__gallery" items={gallery} />

        <div className="work-info__description">
          <p dangerouslySetInnerHTML={this.createMarkup(description)} />
        </div>

        <LinkList className="work-info__links" items={links} />
      </Container>
    );
  }
}
