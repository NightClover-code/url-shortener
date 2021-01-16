import { CREATE_USER, SIGN_USER_IN } from '../actions/types';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    case SIGN_USER_IN:
      return action.payload;
    default:
      return state;
  }
};
export default currentUserReducer;
