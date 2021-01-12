import {
  INPUT_CHANGED,
  YOUTUBE_SPECIAL_LINKS,
  FORM_RESET,
} from '../actions/types';
//initial state
const INITIAL_STATE = {
  user: '',
  videoId: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return { ...state, user: action.payload };
    case YOUTUBE_SPECIAL_LINKS:
      return {
        user: action.payload.user,
        videoId: action.payload.videoId,
      };
    case FORM_RESET:
      return { ...state, user: '' };
    default:
      return state;
  }
};
export default userReducer;
