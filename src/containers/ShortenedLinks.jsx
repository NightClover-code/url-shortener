import React from 'react';
//importing connect from react redux
import { connect } from 'react-redux';
//shortenedLinks component
const ShortenedLinks = ({ links }) => {
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
  const renderedLinks = links.map(({ id, originalLink, shortenedLink }) => {
    return (
      <div className="shortened__link__container" key={id}>
        <input className="original__link" value={originalLink} readOnly />
        <div className="shortened__link__and__button">
          <div className="shortened__link">{shortenedLink}</div>
          <button onClick={e => onCopyHandler(e, shortenedLink)}>Copy</button>
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
export default connect(mapStateToProps)(ShortenedLinks);
