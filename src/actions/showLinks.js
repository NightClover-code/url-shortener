//types
import { SHOW_LINKS_AFTER_REFRESH } from './types';
import showNormalLinks from '../actions/showNormalLinks';
//importing firebase
import { db } from '../firebase';
const showLinks = () => async (dispatch, getState) => {
  let currentUser = getState().currentUser;
  await db
    .collection('users')
    .doc(currentUser.userId)
    .get()
    .then(doc =>
      dispatch({
        type: SHOW_LINKS_AFTER_REFRESH,
        payload: { ...currentUser, links: doc.data().links },
      })
    );
};
export default showLinks;
