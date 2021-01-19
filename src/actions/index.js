//importing types
import {
  ALREADY_SHORTENED_URL,
  CLICK_ON_MENU,
  CLICK_OUT_OF_NAV,
  FORM_RESET,
  INPUT_CHANGED,
  INVALID_URL,
  NO_URL_PROVIDED,
  SUCCESSFULLY_SHORTENED_URL,
  USER_ENTERS_URL,
  SYNCHING_LINKS,
  CREATING_ACCOUNT,
  RESET_LOADING,
} from '../actions/types';
//action creators
export const clickedOnMenu = () => {
  return {
    type: CLICK_ON_MENU,
  };
};
export const clickedOutOfNav = () => {
  return {
    type: CLICK_OUT_OF_NAV,
  };
};
export const inputChanged = target => {
  return {
    type: INPUT_CHANGED,
    payload: target.value.trim(),
  };
};
export const resetForm = () => {
  return {
    type: FORM_RESET,
  };
};
export const userProvidedLink = () => {
  return {
    type: USER_ENTERS_URL,
    payload: 'shortening your link...',
  };
};
export const noLinkProvided = () => {
  return {
    type: NO_URL_PROVIDED,
    payload: 'Please add link!',
  };
};
export const successfullyShortened = () => {
  return {
    type: SUCCESSFULLY_SHORTENED_URL,
    payload: 'Success!',
  };
};
export const invalidLink = () => {
  return {
    type: INVALID_URL,
    payload: 'Please enter a valid URL!',
  };
};
export const alreadyShortened = () => {
  return {
    type: ALREADY_SHORTENED_URL,
    payload: 'Your link is already shortened 😉',
  };
};
export const creatingAccount = () => {
  return {
    type: CREATING_ACCOUNT,
    payload: 'Creating your account...',
  };
};
export const resetLoading = () => {
  return {
    type: RESET_LOADING,
    payload: '',
  };
};
export const synchingLinks = () => {
  return {
    type: SYNCHING_LINKS,
    payload: 'synching your links...',
  };
};
