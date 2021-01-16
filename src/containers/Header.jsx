import React from 'react';
//importing components
import NavBar from './NavBar';
//improting link
import { Link } from 'react-router-dom';
//importing actions
import { clickedOnMenu } from '../actions';
//improting connect from react-redux
import { connect } from 'react-redux';
//header component
const Header = ({ clickedOnMenu }) => {
  //users clicks on menu
  const onMenuClick = () => {
    clickedOnMenu();
  };
  return (
    <header>
      <div className="logo__container">
        <div className="logo">
          <Link to="/">
            <img src="./images/logo.svg" alt="logo" />
          </Link>
        </div>
      </div>
      <div className="menu__container" onClick={onMenuClick}>
        <div className="menu__icon">
          <i className="fas fa-bars fa-lg" id="menu-icon"></i>
        </div>
      </div>
      <NavBar />
    </header>
  );
};
const mapStateToProps = state => {
  return {
    isNavOpen: state.isNavOpen,
  };
};
export default connect(mapStateToProps, { clickedOnMenu })(Header);
