//importing types
import { SIGN_USER_OUT } from '../actions/types';
//importing firebase
import { auth } from '../firebase';
//importing actions
import clearLinks from '../actions/clearLinks';
import { resetLoading } from '../actions';
//action from  creators
const signUserOut = () => async dispatch => {
  //signing out the user
  try {
    const response = await auth.signOut();
    dispatch({
      type: SIGN_USER_OUT,
      payload: {},
    });
    //clear local storage when signing out
    localStorage.setItem('user', JSON.stringify({}));
    //clearing links
    dispatch(clearLinks());
    //reset loading
    dispatch(resetLoading());
  } catch (error) {
    dispatch({
      type: SIGN_USER_OUT,
      payload: {
        error: error.message,
      },
    });
  }
};
export default signUserOut;
