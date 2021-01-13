import React, { useRef } from 'react';
//importing actions
import {
  alreadyShortened,
  inputChanged,
  invalidLink,
  noLinkProvided,
  resetForm,
  successfullyShortened,
  userProvidedLink,
  fetchLink,
} from '../actions';
//importing components
import ShortenedLinks from './ShortenedLinks';
//importing connect from react redux
import { connect } from 'react-redux';
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
  const onFormSubmit = event => {
    //preventing default action on submit
    event.preventDefault();
    //reseting the form
    resetForm();
    //getting data from URL shortener API
    if (user !== '') {
      userProvidedLink();
      inputRef.current.classList.remove('red__border');
      //checking if user enters a youtube shortened link
      if (user.includes('https://shrtco.de/')) {
        alreadyShortened();
      } else {
        fetchLink(user);
      }
    } else {
      inputRef.current.classList.add('red__border');
      noLinkProvided();
    }
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
    user: state.userInfo.user,
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
