import { FETCH_LINKS } from '../actions/types';

const linkReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_LINKS:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default linkReducer;
