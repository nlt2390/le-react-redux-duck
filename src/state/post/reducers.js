import * as types from './types';

const initState = {
  posts: [],
};

export default function post(state = initState, action) {
  switch (action.type) {
    case types.FETCH_SUCCESS:
      const {
        posts,
      } = action.payload;

      return {
        ...state,
        posts,
      };

    default:
      return state;
  }
}
