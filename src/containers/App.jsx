//importing react
import React, { useEffect } from 'react';
//importing styles
import '../styles/css/app.css';
//importing actions
import { clickedOnMenu, clickedOutOfNav } from '../actions';
import savingUser from '../actions/savingUser';
import updateLinks from '../actions/updateLinks';
//importing components
import Boost from '../components/Boost';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
//importing containers
import Header from './Header';
import Statistics from '../components/Statistics';
//importing connect from react redux
import { connect } from 'react-redux';
//app container
const App = ({
  isNavOpen,
  clickedOutOfNav,
  currentUser,
  savingUser,
  updateLinks,
}) => {
  useEffect(() => {
    //saving user after refresh
    if (localStorage.getItem('user') === null) {
      localStorage.setItem('user', JSON.stringify({}));
    } else {
      let userLocalInfo = JSON.parse(localStorage.getItem('user'));
      savingUser(userLocalInfo);
    }
  }, [savingUser]);
  //saving user info to local storage based on whetere they're signed in or not
  useEffect(() => {
    if (currentUser.isSignedIn) {
      const saveToLocal = () => {
        localStorage.setItem('user', JSON.stringify({ ...currentUser }));
      };
      saveToLocal();
      //updating links to show on screen
      updateLinks();
    }
  }, [currentUser, updateLinks]);
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
  updateLinks,
})(App);
