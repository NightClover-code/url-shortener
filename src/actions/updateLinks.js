import { synchingLinks, resetLoading } from './index';

import { UPDATE_LINKS } from '../actions/types';
const updateLinks = () => (dispatch, getState) => {
  dispatch(synchingLinks());
  let currentUser = getState().currentUser;
  if (currentUser.links) {
    dispatch({
      type: UPDATE_LINKS,
      payload: currentUser.links,
    });
  } else {
    dispatch({
      type: UPDATE_LINKS,
      payload: [],
    });
  }
  dispatch(resetLoading());
};
export default updateLinks;
