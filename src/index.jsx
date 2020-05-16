import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './css/App.css'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
