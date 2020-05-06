import React from 'react';

const Child = props => {
  console.log('child props: ', props);

  const { content } = props;
  return (
    <div>
      <h2>{content.title}</h2>
    </div>
  );
};

export default Child;
