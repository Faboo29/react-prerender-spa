import React, { useState } from 'react';
import SubChild from './SubChild';
import pikachuImg from '../assets/pikachu.png';
import { IContent } from '../types/';

interface IChildProps {
  content: IContent;
}

const Child = (props: IChildProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const { content } = props;
  return (
    <div>
      <h2>{content.title}</h2>
      <img src={pikachuImg} alt="pikachu" />
      <button className="button" onClick={() => setIsVisible(!isVisible)}>{`${
        isVisible ? 'Hide' : 'Show'
      } subchild`}</button>
      {isVisible && <SubChild />}
    </div>
  );
};

export default Child;
