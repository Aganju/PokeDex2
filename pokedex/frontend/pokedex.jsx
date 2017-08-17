import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch;
});
