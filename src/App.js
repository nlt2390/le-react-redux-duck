import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import MainLayout from './layouts/mainLayout';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.shape({}).isRequired,
};


export default App;
