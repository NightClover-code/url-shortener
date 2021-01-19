//importing types
import { CREATE_USER } from '../actions/types';
//importing history
import history from '../history';
//importing firebase
import { auth, db } from '../firebase';
const createUser = ({ password, email, username }) => async dispatch => {
  try {
    //creating a user with firebase
    const response = await auth.createUserWithEmailAndPassword(email, password);
    //saving the user to firebase firestoree
    db.collection('users').doc(response.user.uid).set({
      username,
      email,
      password,
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
            type: CREATE_USER,
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
      type: CREATE_USER,
      payload: {
        error: error.message,
      },
    });
  }
};
export default createUser;
