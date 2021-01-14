import React from 'react';
//improting connect from react-redux
import { connect } from 'react-redux';
//importing link from react-router
import { Link } from 'react-router-dom';
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
          <Link to="/login" className="login__link">
            Login
          </Link>
        </li>
        <Link to="/signup" className="sign__up__link">
          Sign Up
        </Link>
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
