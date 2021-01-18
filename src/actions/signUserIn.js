//importing types
import { SIGN_USER_IN } from '../actions/types';
//importing history
import history from '../history';
//importing firebase
import { auth, db } from '../firebase';
//action creators
const signUserIn = ({ email, password }) => async dispatch => {
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
export default signUserIn;
