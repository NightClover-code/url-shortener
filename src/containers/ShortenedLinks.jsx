import React from 'react';
//importing connect from react redux
import { connect } from 'react-redux';
//shortenedLinks component
const ShortenedLinks = ({ currentUser }) => {
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
  if (currentUser.links) {
    const returnedLinks = currentUser.links.map(link => {
      return (
        <div className="shortened__link__container" key={link.id}>
          <input
            className="original__link"
            value={link.originalLink}
            readOnly
          />
          <div className="shortened__link__and__button">
            <div className="shortened__link">{link.shortenedLink}</div>
            <button onClick={e => onCopyHandler(e, link.shortenedLink)}>
              Copy
            </button>
          </div>
        </div>
      );
    });
    // }
    return <div className="returned__links">{returnedLinks}</div>;
  } else {
    return <div className="returned__links"></div>;
  }
};
const mapStateToProps = state => {
  return {
    links: state.links,
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps)(ShortenedLinks);
