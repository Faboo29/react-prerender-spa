import React from 'react';
import SubChild from './SubChild';
import pikachuImg from '../assets/pikachu.png';

const Child = props => {
  const { content } = props;
  return (
    <div>
      <h2>{content.title}</h2>
      <img src={pikachuImg} alt="pikachu" />
      <SubChild />
    </div>
  );
};

export default Child;
