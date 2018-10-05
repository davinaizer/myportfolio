// FSC
import React from 'react';
import PropTypes from 'prop-types';
import './TagList.scss';

const TagList = ({ items }) => (
  <div className="tag-list">
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

TagList.propTypes = {
  items: PropTypes.array,
};

export default TagList;
