import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './state';

const logger = createLogger({
  // ...options
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
