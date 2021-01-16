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
export const fetchLink = user => async dispatch => {
  const response = await shortenURL('/shorten', {
    params: { url: user },
  }).catch(err => {
    if (err.response) {
      dispatch(invalidLink());
    }
  });
  if (response) {
    dispatch({
      type: FETCH_LINKS,
      payload: {
        shortenedLink: response.data.result.full_short_link,
        originalLink: response.data.result.original_link,
        id: uuidv4(),
      },
    });
    dispatch(successfullyShortened());
  }
};
export const createUser = ({ password, email, username }) => async dispatch => {
  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    dispatch({
      type: CREATE_USER,
      payload: {
        username,
        email,
        password,
        userId: response.user.uid,
        isSignedIn: true,
        error: '',
      },
    });
    db.collection('users').doc(response.user.uid).set({
      email,
      password,
      username,
      userId: response.user.uid,
    });
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
  try {
    const response = await auth.signOut();
    dispatch({
      type: SIGN_USER_OUT,
      payload: {
        username: '',
        email: '',
        password: '',
        userId: null,
        isSignedIn: false,
        error: '',
      },
    });
  } catch (error) {
    dispatch({
      type: SIGN_USER_OUT,
      payload: {
        error: error.message,
      },
    });
  }
};
export const signUserIn = ({ email, password }) => async dispatch => {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);
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
          },
        });
      });
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
