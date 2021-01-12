import React from 'react';
//improting connect from react-redux
import { connect } from 'react-redux';
//nav bar component
const NavBar = ({ isNavOpen }) => {
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
          Login
        </li>
        <li className="sign__up__button" data-id="nav-item">
          Sign Up
        </li>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    isNavOpen: state.isNavOpen,
  };
};
export default connect(mapStateToProps)(NavBar);
