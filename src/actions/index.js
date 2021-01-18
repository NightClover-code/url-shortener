import {
  ALREADY_SHORTENED_URL,
  CLICK_ON_MENU,
  CLICK_OUT_OF_NAV,
  FORM_RESET,
  INPUT_CHANGED,
  INVALID_URL,
  NO_URL_PROVIDED,
  SUCCESSFULLY_SHORTENED_URL,
  USER_ENTERS_URL,
  FETCH_LINKS,
  CREATE_USER,
  SIGN_USER_IN,
  SIGN_USER_OUT,
  SAVING_USER_AFTER_REFRESH,
  SAVE_LINK_TO_CURRENT_USER,
} from '../actions/types';
//importing history
import history from '../history';
//importing api call
import shortenURL from '../API/shortenURL';
//imoprting random id's to set as keys for list children
import { v4 as uuidv4 } from 'uuid';
//importing firebase
import { auth, db } from '../firebase';
//action creators
export const clickedOnMenu = () => {
  return {
    type: CLICK_ON_MENU,
  };
};
export const clickedOutOfNav = () => {
  return {
    type: CLICK_OUT_OF_NAV,
  };
};
export const inputChanged = target => {
  return {
    type: INPUT_CHANGED,
    payload: target.value.trim(),
  };
};
export const resetForm = () => {
  return {
    type: FORM_RESET,
  };
};
export const userProvidedLink = () => {
  return {
    type: USER_ENTERS_URL,
    payload: 'shortening your link...',
  };
};
export const noLinkProvided = () => {
  return {
    type: NO_URL_PROVIDED,
    payload: 'Please add link!',
  };
};
export const successfullyShortened = () => {
  return {
    type: SUCCESSFULLY_SHORTENED_URL,
    payload: 'Success!',
  };
};
export const invalidLink = () => {
  return {
    type: INVALID_URL,
    payload: 'Please enter a valid URL!',
  };
};
export const alreadyShortened = () => {
  return {
    type: ALREADY_SHORTENED_URL,
    payload: 'Your link is already shortened 😉',
  };
};
export const fetchLink = linkValue => async (dispatch, getState) => {
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
export const createUser = ({ password, email, username }) => async (
  dispatch,
  getState
) => {
  try {
    //creating a user with firebase
    const response = await auth.createUserWithEmailAndPassword(email, password);
    //saving user's info in a state
    dispatch({
      type: CREATE_USER,
      payload: {
        username,
        email,
        password,
        userId: response.user.uid,
        isSignedIn: true,
        error: '',
        links: [],
      },
    });
    //saving the user to firebase firestoree
    db.collection('users').doc(response.user.uid).set({
      email,
      password,
      username,
      userId: response.user.uid,
      links: getState().links,
    });
    //redirecting to homepage
    history.push('/');
  } catch (error) {
    dispatch({
      type: CREATE_USER,
      payload: {
        error: error.message,
      },
    });
  }
};
export const signUserOut = () => async dispatch => {
  //signing out the user
  try {
    const response = await auth.signOut();
    dispatch({
      type: SIGN_USER_OUT,
      payload: {},
    });
    //clear local storage when signing out
    localStorage.setItem('user', JSON.stringify({}));
  } catch (error) {
    dispatch({
      type: SIGN_USER_OUT,
      payload: {
        error: error.message,
      },
    });
  }
};
export const signUserIn = ({ email, password }) => async (
  dispatch,
  getState
) => {
  //loggin in the user
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
    //getting user's info from firestore (username)
    db.collection('users')
      .doc(response.user.uid)
      .get()
      .then(doc => {
        dispatch({
          type: SIGN_USER_IN,
          payload: {
            username: doc.data().username,
            email,
            password,
            userId: response.user.uid,
            isSignedIn: true,
            error: '',
            links: doc.data().links,
          },
        });
      });
    //redirecting the user
    history.push('/');
  } catch (error) {
    dispatch({
      type: SIGN_USER_IN,
      payload: {
        error: error.message,
      },
    });
  }
};
export const savingUser = userInfo => {
  return {
    type: SAVING_USER_AFTER_REFRESH,
    payload: userInfo,
  };
};
export const saveLinksToCurrentUser = () => (dispatch, getState) => {
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
