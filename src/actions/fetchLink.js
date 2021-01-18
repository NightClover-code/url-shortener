//importing types
import { FETCH_LINKS } from '../actions/types';
//importing api call
import shortenURL from '../API/shortenURL';
//importing actions
import { invalidLink, successfullyShortened } from './index';
import saveLinksToCurrentUser from './saveLinksToCurrentUser';
//imoprting random id's to set as keys for list children
import { v4 as uuidv4 } from 'uuid';
//fetchLink action creator
const fetchLink = linkValue => async dispatch => {
  //response from shortening link
  const response = await shortenURL('/shorten', {
    params: { url: linkValue },
  }).catch(err => {
    if (err.response) {
      dispatch(invalidLink());
    }
  });
  if (response) {
    //setting links as state
    dispatch({
      type: FETCH_LINKS,
      payload: {
        shortenedLink: response.data.result.full_short_link,
        originalLink: response.data.result.original_link,
        id: uuidv4(),
      },
    });
    //set loading state to show success!
    dispatch(successfullyShortened());
    //saving links to user's account
    dispatch(saveLinksToCurrentUser());
  }
};
export default fetchLink;
