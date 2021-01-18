//importing types
import { SAVE_LINK_TO_CURRENT_USER } from '../actions/types';
//importing firebase
import { db } from '../firebase';
//action creators
const saveLinksToCurrentUser = () => (dispatch, getState) => {
  let currentUser = getState().currentUser;
  let links = getState().links;
  dispatch({
    type: SAVE_LINK_TO_CURRENT_USER,
    payload: {
      ...currentUser,
      links,
    },
  });
  db.collection('users')
    .doc(currentUser.userId)
    .set({
      ...currentUser,
      links,
    });
};
export default saveLinksToCurrentUser;
