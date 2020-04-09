import React from 'react';
import ReactDOM from 'react-dom';
import{ BrowserRouter } from 'react-router-dom';
import { ChatterProvider } from '../ChatterContext';
import App from './App';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter> 
      <ChatterProvider>
        <App/>
      </ChatterProvider>
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
})