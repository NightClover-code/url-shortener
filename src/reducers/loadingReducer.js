import {
  ALREADY_SHORTENED_URL,
  INVALID_URL,
  NO_URL_PROVIDED,
  RESET_LOADING,
  SUCCESSFULLY_SHORTENED_URL,
  USER_ENTERS_URL,
  SYNCHING_LINKS,
} from '../actions/types';

const loadingReducer = (state = '', action) => {
  switch (action.type) {
    case USER_ENTERS_URL:
      return action.payload;
    case NO_URL_PROVIDED:
      return action.payload;
    case ALREADY_SHORTENED_URL:
      return action.payload;
    case SUCCESSFULLY_SHORTENED_URL:
      return action.payload;
    case INVALID_URL:
      return action.payload;
    case RESET_LOADING:
      return action.payload;
    case SYNCHING_LINKS:
      return action.payload;
    default:
      return state;
  }
};
export default loadingReducer;
