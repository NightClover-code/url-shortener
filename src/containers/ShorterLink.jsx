import React, { useRef } from 'react';
import {
  alreadyShortened,
  fetchLink,
  inputChanged,
  invalidLink,
  noLinkProvided,
  resetForm,
  successfullyShortened,
  userProvidedLink,
} from '../actions';

import ShortenedLinks from './ShortenedLinks';
import { connect } from 'react-redux';

//importing actions

//importing components

//importing connect from react redux

//shorter link component
const ShorterLink = ({
  user,
  inputChanged,
  resetForm,
  loading,
  noLinkProvided,
  userProvidedLink,
  alreadyShortened,
  fetchLink,
}) => {
  //refs
  const inputRef = useRef(null);
  //on form submit function
  const onFormSubmit = event => {
    //preventing default action on submit
    event.preventDefault();
    if (user !== '') {
      userProvidedLink();
      inputRef.current.classList.remove('red__border');
      if (user.includes('https://shrtco.de/')) {
        alreadyShortened();
      } else {
        fetchLink(user);
      }
    } else {
      inputRef.current.classList.add('red__border');
      noLinkProvided();
    }
    //reseting the form
    resetForm();
  };
  return (
    <div className="url__shortener">
      <div className="url__shortener__container">
        <form onSubmit={e => onFormSubmit(e)}>
          <input
            type="text"
            placeholder="Shorten a link here..."
            onChange={e => inputChanged(e.target)}
            value={user}
            ref={inputRef}
          />
          <button>Shorten it!</button>
        </form>
      </div>
      <div className="shortened__links">
        {loading}
        <ShortenedLinks />
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, {
  inputChanged,
  resetForm,
  invalidLink,
  userProvidedLink,
  noLinkProvided,
  successfullyShortened,
  alreadyShortened,
  fetchLink,
})(ShorterLink);
