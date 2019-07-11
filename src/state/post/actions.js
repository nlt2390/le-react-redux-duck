import * as types from './types';

const actionFetchSuccess = (posts) => ({
  type: types.FETCH_SUCCESS,
  payload: {
    posts,
  }
});

export const fetchPosts = () => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then((json) => {
    dispatch(actionFetchSuccess(json));
  })
};
