import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import navReducer from './navBarReducer';
import userReducer from './userReducer';

export default combineReducers({
  isNavOpen: navReducer,
  userInfo: userReducer,
  loading: loadingReducer,
});
