import { INPUT_CHANGED, FORM_RESET } from '../actions/types';

const linkValueReducer = (state = '', action) => {
  switch (action.type) {
    case INPUT_CHANGED:
      return action.payload;
    case FORM_RESET:
      return '';
    default:
      return state;
  }
};
export default linkValueReducer;
