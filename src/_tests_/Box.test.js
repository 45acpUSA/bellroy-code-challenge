import React from 'react';
import ReactDOM from 'react-dom';
import Box from '../Box.js';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Box />, div);
  ReactDOM.unmountComponentAtNode(div);
})