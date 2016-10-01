
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/home/HomePage.js';
import NotFoundPage from './components/common/NotFoundPage.js';
import AboutPage from './components/about/AboutPage.js';
import Timeline from './components/timeline/Timeline.js';
import ManageTimelinePage from './components/timeline/ManageTimelinePage'
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="timeline" component={Timeline}/>
    <Route path="newItem" component={ManageTimelinePage}/>
    <Route path="newItem/:id" component={ManageTimelinePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
