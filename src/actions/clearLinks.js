import { CLEAR_LINKS_AFTER_SIGN_OUT } from './types';
const clearLinks = () => {
  return {
    type: CLEAR_LINKS_AFTER_SIGN_OUT,
    payload: [],
  };
};
export default clearLinks;
