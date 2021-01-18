//types
import { SHOW_NORMAL_LINKS_AFTER_REFRESH } from './types';
const showNormalLinks = () => (dispatch, getState) => {
  let currentUser = getState().currentUser;
  dispatch({
    type: SHOW_NORMAL_LINKS_AFTER_REFRESH,
    payload: currentUser.links,
  });
};
export default showNormalLinks;
