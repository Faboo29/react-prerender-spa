import React, { Component } from 'react';
import './App.scss';
import data from './data/content.json';
import Child from './components/Child';

interface IAppProps {
  localeId: string;
}

export default function App(props: IAppProps) {
  const { localeId } = props;
  const content = data.filter(locale => locale.id === localeId)[0];

  return (
    <div>
      <h1>Hey i am the parent</h1>
      <Child content={content} />
    </div>
  );
}
