//importing reducers
import loadingReducer from './loadingReducer';
import navReducer from './navBarReducer';
import linkValueReducer from './linkValueReducer';
import linkReducer from './linkReducer';
import currentUserReducer from './currentUserReducer';
import loadingAccountReducer from './loadingAccountReducer';
//redux stuff
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//combining reducers
export default combineReducers({
  isNavOpen: navReducer,
  linkValue: linkValueReducer,
  loading: loadingReducer,
  links: linkReducer,
  currentUser: currentUserReducer,
  form: formReducer,
  loadingAccount: loadingAccountReducer,
});
