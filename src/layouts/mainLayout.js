import React from 'react';
import {
  Route,
  Router,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import {
  PostListPage,
  Error404Page,
  LoginPage,
} from '../pages';
import PrivateRoute from './privateRoute';

const history = createBrowserHistory();

const MainLayout = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/" component={PostListPage} />
        <Route component={Error404Page} />
      </Switch>
    </Router>
  );
};

export default MainLayout;
