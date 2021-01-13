import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import navReducer from './navBarReducer';
import userReducer from './userReducer';
import linkReducer from './linkReducer';

export default combineReducers({
  isNavOpen: navReducer,
  userInfo: userReducer,
  loading: loadingReducer,
  links: linkReducer,
});
