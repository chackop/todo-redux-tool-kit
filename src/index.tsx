import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// old store
// import store from './redux-old-version';
// new store
import store from './redux-toolkit-version';

import './index.css';
import App from './App/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
