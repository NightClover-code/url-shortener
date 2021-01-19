//types
import {
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  LOGIN_WITH_GITHUB,
} from './types';
//improting firebase
import firebase from 'firebase/app';
//importing auth
import { auth } from '../firebase';
//importing history
import history from '../history';
//importing database
import { db } from '../firebase';
export const loginWithGoogle = () => async dispatch => {
  try {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    //signing in the use with google
    const response = await auth.signInWithPopup(googleAuthProvider);
    //saving the user to firebase firestoree
    db.collection('users').doc(response.user.uid).set({
      username: response.user.displayName,
      email: response.user.email,
      userId: response.user.uid,
      isSignedIn: true,
      error: '',
      links: [],
    });
    setTimeout(() => {
      //getting user's info from firestore
      db.collection('users')
        .doc(response.user.uid)
        .get()
        .then(doc =>
          dispatch({
            type: LOGIN_WITH_GOOGLE,
            payload: doc.data(),
          })
        );
      //redirecting to homepage
      history.push('/');
    }, 100);
    //redirecting to homepage
    history.push('/');
  } catch (error) {
    dispatch({
      type: LOGIN_WITH_GOOGLE,
      payload: {
        error: error.message,
      },
    });
  }
};
export const loginWithFacebook = () => async dispatch => {
  try {
    const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
    //signing in the use with facebook
    const response = await auth.signInWithPopup(facebookAuthProvider);
    //saving the user to firebase firestoree
    db.collection('users').doc(response.user.uid).set({
      username: response.user.displayName,
      email: response.user.email,
      userId: response.user.uid,
      isSignedIn: true,
      error: '',
      links: [],
    });
    setTimeout(() => {
      //getting user's info from firestore
      db.collection('users')
        .doc(response.user.uid)
        .get()
        .then(doc =>
          dispatch({
            type: LOGIN_WITH_FACEBOOK,
            payload: doc.data(),
          })
        );
      //redirecting to homepage
      history.push('/');
    }, 100);
    //redirecting to homepage
    history.push('/');
  } catch (error) {
    dispatch({
      type: LOGIN_WITH_FACEBOOK,
      payload: {
        error: error.message,
      },
    });
  }
};
export const loginWithGithub = () => async dispatch => {
  try {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    //signing in the use with github
    const response = await auth.signInWithPopup(githubAuthProvider);
    //saving the user to firebase firestoree
    db.collection('users').doc(response.user.uid).set({
      username: response.user.displayName,
      email: response.user.email,
      userId: response.user.uid,
      isSignedIn: true,
      error: '',
      links: [],
    });
    setTimeout(() => {
      //getting user's info from firestore
      db.collection('users')
        .doc(response.user.uid)
        .get()
        .then(doc =>
          dispatch({
            type: LOGIN_WITH_GITHUB,
            payload: doc.data(),
          })
        );
      //redirecting to homepage
      history.push('/');
    }, 100);
    //redirecting to homepage
    history.push('/');
  } catch (error) {
    dispatch({
      type: LOGIN_WITH_GITHUB,
      payload: {
        error: error.message,
      },
    });
  }
};
