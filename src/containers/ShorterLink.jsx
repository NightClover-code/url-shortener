import React, { useRef, useState } from 'react';
//importing actions
import {
  alreadyShortened,
  inputChanged,
  invalidLink,
  noLinkProvided,
  resetForm,
  successfullyShortened,
  userProvidedLink,
  youtubeSpecial,
} from '../actions';

//importing connect from react redux
import { connect } from 'react-redux';
//importing the axios boiler plate
import shortenURL from '../API/shortenURL';
//imoprting random id's to set as keys for list children
import { v4 as uuidv4 } from 'uuid';

//shorter link component
const ShorterLink = ({
  videoId,
  user,
  youtubeSpecial,
  inputChanged,
  resetForm,
  loading,
  successfullyShortened,
  noLinkProvided,
  invalidLink,
  userProvidedLink,
  alreadyShortened,
}) => {
  //refs
  const inputRef = useRef(null);
  const [links, setLinks] = useState([]);
  //on form submit handler
  const onFormSubmit = async event => {
    //preventing default action on submit
    event.preventDefault();
    //reseting the form
    resetForm();
    //getting data from URL shortener API
    if (user !== '') {
      userProvidedLink();
      inputRef.current.classList.remove('red__border');
      //checking if user enters a youtube shortened link
      if (user.includes('youtu.be/')) {
        youtubeSpecial(user);
        resetForm();
        //TODO add redux thunk
        const response = await shortenURL('/shorten', {
          params: {
            url: `https://youtube.com/watch?v=${videoId}`,
          },
        });
        if (response) {
          successfullyShortened();
          //adding reponse to state as links
          setLinks([
            ...links,
            {
              shortenedLink:
                response.data.result.full_short_link,
              originalLink:
                response.data.result.original_link,
              id: uuidv4(),
            },
          ]);
        }
        //checking if user enters a shortened link
      } else if (user.includes('https://shrtco.de/')) {
        alreadyShortened();
      } else {
        //getting data
        const response = await shortenURL('/shorten', {
          params: { url: user },
        }).catch(err => {
          if (err.response) {
            invalidLink();
          }
        });
        if (response) {
          successfullyShortened();
          //adding data to state as links
          setLinks([
            ...links,
            {
              shortenedLink:
                response.data.result.full_short_link,
              originalLink:
                response.data.result.original_link,
              id: uuidv4(),
            },
          ]);
        }
      }
    } else {
      inputRef.current.classList.add('red__border');
      noLinkProvided();
    }
  };

  //copying to clipboard on button click
  const onCopyHandler = (e, str) => {
    //changing background and telling the user they copied the link
    e.target.classList.add('copied');
    e.target.innerHTML = 'Copied!';
    //copying the text
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
  //returning links
  const returnedLinks = links.map(
    ({ originalLink, id, shortenedLink }) => {
      return (
        <div
          className="shortened__link__container"
          key={id}
        >
          <input
            className="original__link"
            value={originalLink}
            readOnly
          />
          <div className="shortened__link__and__button">
            <div className="shortened__link">
              {shortenedLink}
            </div>
            <button
              onClick={e => onCopyHandler(e, shortenedLink)}
            >
              Copy
            </button>
          </div>
        </div>
      );
    }
  );
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
        {returnedLinks}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.userInfo.user,
    videoId: state.userInfo.videoId,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, {
  youtubeSpecial,
  inputChanged,
  resetForm,
  invalidLink,
  userProvidedLink,
  noLinkProvided,
  successfullyShortened,
  alreadyShortened,
})(ShorterLink);
