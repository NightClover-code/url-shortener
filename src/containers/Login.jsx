import React from 'react';
//imoprting components
import LoginForm from './LoginForm';
//importing styles
import '../../src/styles/css/login.css';
//importing redux form
import { reduxForm } from 'redux-form';
//importing link from react router
import { Link } from 'react-router-dom';
//importing connect
import { connect } from 'react-redux';
//importing actions
import {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
} from '../actions/loginWithProvider';
//login component
const Login = ({
  handleSubmit,
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
}) => {
  //rendering errors
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="header">{error}</div>;
    }
  };
  return (
    <div className="login__page">
      <div className="wrapper">
        <div className="login__card">
          <div className="login__card__container">
            <div className="illustration">
              <img src="./images/login.svg" alt="login" />
            </div>
            <div className="text__content">
              <h1>Log In to Shortify</h1>
              <div className="social__media">
                <div
                  className="facebook__icon icon"
                  onClick={() => loginWithFacebook()}
                >
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div
                  className="google__icon icon"
                  onClick={() => loginWithGoogle()}
                >
                  <i className="fab fa-google"></i>
                </div>
                <div
                  className="github__icon icon"
                  onClick={() => loginWithGithub()}
                >
                  <i class="fab fa-github"></i>
                </div>
              </div>
              <p>or use your email account:</p>
              <LoginForm onSubmit={handleSubmit} renderError={renderError} />
              <div className="not__a__member">
                <p>Not a member?</p>
                <Link to="/signup" className="sign__up__now">
                  Signup now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//checking if user entered email and password
const validate = ({ email, password }) => {
  const errors = {};
  if (!email) {
    errors.email = 'You must enter a email';
  }
  if (!password) {
    errors.password = 'You must enter a password';
  }
  return errors;
};
const formWrapper = reduxForm({
  form: 'loginForm',
  validate,
})(Login);
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  loginWithGoogle,
  loginWithFacebook,
  loginWithGithub,
})(formWrapper);
