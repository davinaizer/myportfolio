import React, { Component } from 'react';

import './SocialIcon.scss';

export default class SocialIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div className="social__icon">
        <a href={props.href ? props.href : '#'}>
          <img src={props.src} />
        </a>
      </div>
    );
  }
}
