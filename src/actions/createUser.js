//importing types
import { CREATE_USER } from '../actions/types';
//importing history
import history from '../history';
//importing firebase
import { auth, db } from '../firebase';
const createUser = ({ password, email, username }) => async (
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
export default createUser;
