import React from 'react';
import ReactDOM from 'react-dom/client';
import RomanNumeralConverter from './pages/home'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RomanNumeralConverter />
  </React.StrictMode>
);
