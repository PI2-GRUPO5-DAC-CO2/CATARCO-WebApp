import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './services/service-worker-registration';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
