//importing styled

import '../styles/css/app.css';

import { clickedOnMenu, clickedOutOfNav, savingUser } from '../actions';

import Boost from '../components/Boost';
import Footer from '../components/Footer';
import Header from './Header';
import IntroSection from '../components/IntroSection';
import React, { useEffect } from 'react';
import Statistics from '../components/Statistics';
import { connect } from 'react-redux';

//importing components
const App = ({ isNavOpen, clickedOutOfNav, currentUser, savingUser }) => {
  useEffect(() => {
    //saving user after refresh
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify({}));
    } else {
      let userLocalInfo = JSON.parse(localStorage.getItem('user'));
      savingUser(userLocalInfo);
    }
  }, [savingUser]);
  //saving items to local storage based on todos change
  useEffect(() => {
    if (currentUser.isSignedIn) {
      const saveToLocal = () => {
        localStorage.setItem('user', JSON.stringify(currentUser));
      };
      saveToLocal();
    }
  }, [currentUser]);
  //toggle isNavOpen
  const onAppClick = target => {
    if (
      target.getAttribute('data-id') !== 'nav-item' &&
      target.getAttribute('id') !== 'menu-icon'
    ) {
      clickedOutOfNav();
    }
  };
  return (
    <div
      className={`app__container ${isNavOpen ? 'overlay' : ''}`}
      onClick={e => onAppClick(e.target)}
    >
      <div className="wrapper">
        <Header />
        <IntroSection />
      </div>
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    isNavOpen: state.isNavOpen,
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  clickedOnMenu,
  clickedOutOfNav,
  savingUser,
})(App);
