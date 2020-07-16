import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/Home/Home'
import Section from './Pages/Section/Section'
import Components from './Components/Catalog'
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home/>
    <Section/>
    <Components/>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
