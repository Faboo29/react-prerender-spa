import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

const root = document.getElementById('root');
const localeId = root.getAttribute('data-locale');

ReactDOM.render(<App localeId={localeId} />, root);
