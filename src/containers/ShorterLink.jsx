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
} from '../actions';
import fetchLink from '../actions/fetchLink';
//importing components
import ShortenedLinks from './ShortenedLinks';
//importing connect from react redux
import { connect } from 'react-redux';
//shorter link component
const ShorterLink = ({
  linkValue,
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
    if (linkValue !== '') {
      userProvidedLink();
      inputRef.current.classList.remove('red__border');
      if (linkValue.includes('shrtco.de/')) {
        alreadyShortened();
      } else {
        fetchLink(linkValue);
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
            value={linkValue}
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
    linkValue: state.linkValue,
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
