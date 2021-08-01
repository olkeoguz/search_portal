import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {ResultListContextProvider} from './context/ResultList';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <ResultListContextProvider>
      <App />
      </ResultListContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
