import React, { Component } from 'react';
import './App.css';
import data from './data/content.json';
import Child from './components/Child';

export default function App(props) {
  const { localeId } = props;
  console.log(data);

  console.log(localeId);

  const content = data.filter(locale => locale.id === localeId)[0];

  return (
    <div>
      <h1>Hey i am the parent</h1>
      <Child content={content} />
    </div>
  );
}
