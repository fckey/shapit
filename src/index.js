/* eslint-disable no-console */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { syncHistoryWithStore } from 'react-router-redux';
import {loadTimeline} from './actions/timelineActions';


const store = configureStore();
store.dispatch(loadTimeline());

// Create an enhanced history that syncs navigation events with the store

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
 document.getElementById('app')
);
