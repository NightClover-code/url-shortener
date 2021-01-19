import { DELETE_LINK } from './types';
import { db } from '../firebase';
const deleteLink = link => (dispatch, getState) => {
  //currentUser
  const currentUser = getState().currentUser;
  const links = getState().links;
  const filteredLinks = links.filter(someLink => someLink !== link);
  //returning filtered user
  dispatch({
    type: DELETE_LINK,
    payload: {
      ...currentUser,
      links: filteredLinks,
    },
  });
  //clearing database
  db.collection('users')
    .doc(currentUser.userId)
    .set({
      ...currentUser,
      links: filteredLinks,
    });
};
export default deleteLink;
