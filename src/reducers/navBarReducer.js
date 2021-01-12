import { CLICK_OUT_OF_NAV, CLICK_ON_MENU } from '../actions/types';

const navReducer = (state = false, action) => {
  switch (action.type) {
    case CLICK_OUT_OF_NAV:
      return false;
    case CLICK_ON_MENU:
      return !state;
    default:
      return state;
  }
};
export default navReducer;
