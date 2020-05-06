import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

const root = document.getElementById('root');
const localeId = root.getAttribute('data-locale');

ReactDOM.render(<App localeId={localeId} />, root);
