// FSC
import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

import './LinkList.scss';

const LinkList = ({ items }) => (
  <div className="link-list">
    {items.map((item, index) => (
      <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
        <Button className="secondary">{item.label}</Button>
      </a>
    ))}
  </div>
);

export default LinkList;

LinkList.propTypes = {
  items: PropTypes.array
};

