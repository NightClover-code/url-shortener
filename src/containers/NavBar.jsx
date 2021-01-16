import React from 'react';
//improting connect from react-redux
import { connect } from 'react-redux';
//importing link from react-router
import { Link } from 'react-router-dom';
//nav bar component
const NavBar = ({ isNavOpen, isSignedIn, username }) => {
  const renderLoggedInOrLoggedOut = () => {
    if (isSignedIn) {
      return `Logged in as ${username}`;
    } else {
      return (
        <Link to="/login" className="login__link">
          Login
        </Link>
      );
    }
  };
  const renderSignInOrSignOut = () => {
    if (isSignedIn) {
      return (
        <Link to="" className="sign__up__link">
          Sign Out
        </Link>
      );
    } else {
      return (
        <Link to="/signup" className="sign__up__link">
          Sign Up
        </Link>
      );
    }
  };
  return (
    <nav className={`${isNavOpen ? 'active' : ''}`} id="nav-bar">
      <div className="nav__list" id="nav-list">
        <li className="list__item" data-id="nav-item">
          Features
        </li>
        <li className="list__item" data-id="nav-item">
          Pricing
        </li>
        <li className="list__item" data-id="nav-item">
          Resources
        </li>
      </div>
      <div className="account__list" id="account-list">
        <li className="list__item login" data-id="nav-item">
          {renderLoggedInOrLoggedOut()}
        </li>
        {renderSignInOrSignOut()}
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    isNavOpen: state.isNavOpen,
    isSignedIn: state.currentUser.isSignedIn,
    username: state.currentUser.username,
  };
};
export default connect(mapStateToProps)(NavBar);
