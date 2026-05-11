import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Render the app once and wrap it in BrowserRouter so route links work.
ReactDOM.render(
  <BrowserRouter>
    {/* App contains the shared header and page routes. */}
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
