import {
  CREATE_USER,
  SAVING_USER_AFTER_REFRESH,
  SIGN_USER_IN,
  SIGN_USER_OUT,
  SAVE_LINK_TO_CURRENT_USER,
  SHOW_LINKS_AFTER_REFRESH,
  SYNCHING_LINKS,
} from '../actions/types';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case SIGN_USER_IN:
      return action.payload;
    case SIGN_USER_OUT:
      return action.payload;
    case SAVING_USER_AFTER_REFRESH:
      return action.payload;
    case SAVE_LINK_TO_CURRENT_USER:
      return action.payload;
    case SHOW_LINKS_AFTER_REFRESH:
      return action.payload;
    case SYNCHING_LINKS:
      return action.payload;
    default:
      return state;
  }
};
export default currentUserReducer;
