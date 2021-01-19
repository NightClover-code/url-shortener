import {
  CREATE_USER,
  SAVING_USER_AFTER_REFRESH,
  SIGN_USER_IN,
  SIGN_USER_OUT,
  SAVE_LINK_TO_CURRENT_USER,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_GITHUB,
  LOGIN_WITH_FACEBOOK,
  DELETE_LINK,
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
    case LOGIN_WITH_GOOGLE:
      return action.payload;
    case LOGIN_WITH_GITHUB:
      return action.payload;
    case LOGIN_WITH_FACEBOOK:
      return action.payload;
    case DELETE_LINK:
      return action.payload;
    default:
      return state;
  }
};
export default currentUserReducer;
