import React from 'react';
//importing styles
import '../../src/styles/css/sign_up.css';
import { reduxForm } from 'redux-form';
//importing link from react router
import { Link } from 'react-router-dom';
//importing components
import SignUpForm from './SignUpForm';
//importing connect
import { connect } from 'react-redux';
//login component
const SignUp = ({ handleSubmit }) => {
  //rendering errors
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="header">{error}</div>;
    }
  };
  return (
    <div className="sign__up__page">
      <div className="wrapper">
        <div className="sign__up__card">
          <div className="sign__up__card__container">
            <div className="illustration">
              <img src="./images/signup.svg" alt="signup" />
            </div>
            <div className="text__content">
              <h1>Create Account</h1>
              <SignUpForm onSubmit={handleSubmit} renderError={renderError} />
              <div className="already__have__account">
                <p>Already have an account?</p>
                <Link to="/login" className="login__now">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const validate = ({ email, password, passwordConfirmed, username }) => {
  const errors = {};
  if (!email) {
    errors.email = 'You must enter an email';
  }
  if (!password) {
    errors.password = 'You must enter a password';
  }
  if (password !== passwordConfirmed) {
    errors.passwordConfirmed = "Passwords don't match. Please try again.";
  }
  if (password && password.length < 8) {
    errors.password = 'Password length must be at least 8 characters';
  }
  if (password && password.length > 15) {
    errors.password = 'Password length must not exceed 15 characters';
  }
  if (username && username.length < 4) {
    errors.username = 'Please enter a longer username';
  }
  return errors;
};
//checking if user entered email and password
const formWrapper = reduxForm({
  form: 'signUpForm',
  validate,
})(SignUp);
export default connect(null)(formWrapper);
