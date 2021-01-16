import {
  CREATE_USER,
  SAVING_USER_AFTER_REFRESH,
  SIGN_USER_IN,
  SIGN_USER_OUT,
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
    default:
      return state;
  }
};
export default currentUserReducer;
