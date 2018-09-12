// FSC
import React from 'react';
import './TagList.scss';

const TagList = ({ tags }) => {

  return (
    <div className="tag-list">
      <ul>
        {
        tags.map((tag, index) =>
          <li key={index}>
            {tag}
          </li>)
        }
      </ul>
    </div>
  )
};

export default TagList;
