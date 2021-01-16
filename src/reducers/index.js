import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import navReducer from './navBarReducer';
import linkValueReducer from './linkValueReducer';
import linkReducer from './linkReducer';
import currentUserReducer from './currentUserReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  isNavOpen: navReducer,
  linkValue: linkValueReducer,
  loading: loadingReducer,
  links: linkReducer,
  currentUser: currentUserReducer,
  form: formReducer,
});
