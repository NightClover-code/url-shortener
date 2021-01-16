import { CREATE_USER } from '../actions/types';

const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};
export default currentUserReducer;
