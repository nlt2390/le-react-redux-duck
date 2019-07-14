import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import AuthorizedLayout from './authorizedLayout';

const auth = {
  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  },
};

const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={renderProps => (auth.isAuthenticated() ? (
        <AuthorizedLayout
          history={renderProps.history}
        >
          <Component {...renderProps} />
        </AuthorizedLayout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
      ))
    }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
};

PrivateRoute.defaultProps = {
  component: () => null,
};


export default PrivateRoute;
