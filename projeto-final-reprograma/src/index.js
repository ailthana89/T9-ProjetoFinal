import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Routes from './Routes'
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Routes />
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
