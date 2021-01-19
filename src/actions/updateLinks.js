import { synchingLinks, resetLoading } from './index';

import { UPDATE_LINKS } from '../actions/types';
const updateLinks = () => (dispatch, getState) => {
  dispatch(synchingLinks());
  let currentUser = getState().currentUser;
  dispatch({
    type: UPDATE_LINKS,
    payload: currentUser.links,
  });
  dispatch(resetLoading());
};
export default updateLinks;
