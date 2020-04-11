import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import{ BrowserRouter } from 'react-router-dom';
import { ChatterProvider } from './ChatterContext';


ReactDOM.render(
  <BrowserRouter>
    <ChatterProvider>
      <App />
    </ChatterProvider>
  </BrowserRouter>, document.getElementById('root'));



