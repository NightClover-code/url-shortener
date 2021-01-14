//importing styled

import '../styles/css/app.css';

import { clickedOnMenu, clickedOutOfNav } from '../actions';

import Boost from '../components/Boost';
import Footer from '../components/Footer';
import Header from './Header';
import IntroSection from '../components/IntroSection';
import React from 'react';
import Statistics from '../components/Statistics';
import { connect } from 'react-redux';

//importing components






const App = ({ isNavOpen, clickedOutOfNav }) => {
  //functions
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
      className={`app__container ${
        isNavOpen ? 'overlay' : ''
      }`}
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
  };
};
export default connect(mapStateToProps, {
  clickedOnMenu,
  clickedOutOfNav,
})(App);
