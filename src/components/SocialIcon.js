import React from 'react';
import PropTypes from 'prop-types';

import './SocialIcon.scss';

const SocialIcon = ({ icon, href }) => (
  <div className="social__icon">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt="" />
    </a>
  </div>
);

SocialIcon.propTypes = {
  icon: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
