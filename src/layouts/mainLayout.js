import React from 'react';
import {
  Route,
  Router,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  PostListPage,
} from '../pages';

const history = createBrowserHistory();

const MainLayout = () => {
  return (
    <Router history={history}>
      <Route path="/" component={PostListPage} />
    </Router>
  );
};

export default MainLayout;
