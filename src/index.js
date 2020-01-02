import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from "./js/App.jsx";
import store from './js/modules/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("teso-test"));