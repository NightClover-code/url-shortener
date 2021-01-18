//importing types
import { SAVING_USER_AFTER_REFRESH } from '../actions/types';
//action creators
const savingUser = userInfo => {
  return {
    type: SAVING_USER_AFTER_REFRESH,
    payload: userInfo,
  };
};
export default savingUser;
