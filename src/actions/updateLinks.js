import currentUserReducer from '../reducers/currentUserReducer';

import { UPDATE_LINKS } from '../actions/types';
const updateLinks = () => (dispatch, getState) => {
  let currentUser = getState().currentUser;
  dispatch({
    type: UPDATE_LINKS,
    payload: currentUser.links,
  });
};
export default updateLinks;
