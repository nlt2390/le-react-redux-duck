import { combineReducers } from 'redux';

import { reducer as postReducer } from './post';


export default combineReducers({
  post: postReducer,
});
