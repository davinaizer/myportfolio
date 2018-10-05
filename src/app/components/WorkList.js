// FSC
import React from 'react';
import PropTypes from 'prop-types';
import WorkItem from './WorkItem';

const WorkList = ({ items, onSelect }) => {
  const workList = items.map((item, index) => (
    <WorkItem
      key={item.id}
      id={item.id}
      thumb={item.images.thumb}
      title={item.title}
      summary={item.summary}
      tags={item.tags}
      onSelect={onSelect}
      isFlipped={(index + 1) % 2 == 0 ? true : undefined}
    />
  ));

  return workList;
};

WorkItem.propTypes = {
  items: PropTypes.object,
  onSelect: PropTypes.func,
};

export default WorkList;
