import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context/Context';

import './index.css'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>

      <App />
    </Context>

  </React.StrictMode>
);

