import {
  FETCH_LINKS,
  SHOW_NORMAL_LINKS_AFTER_REFRESH,
  CLEAR_LINKS_AFTER_SIGN_OUT,
} from '../actions/types';

const linkReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LINKS:
      return [...state, action.payload];
    case SHOW_NORMAL_LINKS_AFTER_REFRESH:
      return action.payload;
    case CLEAR_LINKS_AFTER_SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};
export default linkReducer;
