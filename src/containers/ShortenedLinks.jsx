import React from 'react';
//importing connect from react redux
import { connect } from 'react-redux';
import deleteLink from '../actions/deleteLink';
//shortenedLinks component
const ShortenedLinks = ({ links, deleteLink }) => {
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
  const renderedLinks = links.map(link => {
    return (
      <div className="shortened__link__container" key={link.id}>
        <input className="original__link" value={link.originalLink} readOnly />
        <div className="shortened__link__and__button">
          <div className="shortened__link">{link.shortenedLink}</div>
          <button onClick={e => onCopyHandler(e, link.shortenedLink)}>
            Copy
          </button>
          <div className="close__icon" onClick={() => deleteLink(link)}>
            <img src="./images/icon-close.svg" alt="close-icon" />
          </div>
        </div>
      </div>
    );
  });
  return <div className="returned__links">{renderedLinks}</div>;
};

const mapStateToProps = state => {
  return {
    links: state.links,
  };
};
export default connect(mapStateToProps, { deleteLink })(ShortenedLinks);
