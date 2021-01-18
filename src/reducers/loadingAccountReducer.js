import { CREATING_ACCOUNT, RESET_LOADING } from '../actions/types';

const loadingAccountReducer = (state = '', action) => {
  switch (action.type) {
    case CREATING_ACCOUNT:
      return action.payload;
    case RESET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
export default loadingAccountReducer;
