// FSC
import React from 'react';
import WorkItem from './WorkItem';

// import all images from img folder
require.context('../img/works/', true, /\.(png|jp(e*)g|svg)$/);

const WorkList = ({ data, onSelect }) => {
  const workList = data.map((item, index) => (
    <WorkItem
      key={item.id}
      thumb={item.images.thumb}
      title={item.title}
      description={item.description}
      tags={item.tags}
      onSelect={onSelect}
      isFlipped={(index + 1) % 2 == 0 ? true : undefined}
    />
  ));

  return workList;
};

export default WorkList;
