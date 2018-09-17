// FSC
import React from 'react';
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

export default TagList;
