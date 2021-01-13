import { INPUT_CHANGED, FORM_RESET } from '../actions/types';
//initial state
const INITIAL_STATE = {
  user: '',
  videoId: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return { ...state, user: action.payload };
    case FORM_RESET:
      return { ...state, user: '' };
    default:
      return state;
  }
};
export default userReducer;
