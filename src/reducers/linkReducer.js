import {
  FETCH_LINKS,
  UPDATE_LINKS,
  CLEAR_LINKS_AFTER_SIGN_OUT,
} from '../actions/types';

const linkReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LINKS:
      return [...state, action.payload];
    case UPDATE_LINKS:
      return action.payload;
    case CLEAR_LINKS_AFTER_SIGN_OUT:
      return action.payload;
    default:
      return state;
  }
};
export default linkReducer;
