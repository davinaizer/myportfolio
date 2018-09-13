import React, { Component } from 'react';

import './SocialIcon.scss';

const SocialIcon = ({ icon, href }) => (
  <div className="social__icon">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} />
    </a>
  </div>
);

export default SocialIcon;
