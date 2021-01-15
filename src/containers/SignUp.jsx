import React from 'react';
//importing styles
import '../../src/styles/css/sign_up.css';

import { Field, reduxForm } from 'redux-form';

//importing link from react router
import { Link } from 'react-router-dom';
//importing connect
import { connect } from 'react-redux';
//login component
const SignUp = () => {
  const renderSignUp = ({ placeholder, input, source, type }) => {
    return (
      <div className="input__container">
        <div className="input__container">
          <input type={type} placeholder={placeholder} />
          <div className="icon__input">
            <img src={`./images/${source}`} alt="" />
          </div>
        </div>
      </div>
    );
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
              <form>
                <Field
                  name="email"
                  component={renderSignUp}
                  placeholder="Email"
                  type="email"
                  source="icon-email.svg"
                />
                <Field
                  name="password"
                  component={renderSignUp}
                  placeholder="Password"
                  type="password"
                  source="icon-password.svg"
                />
                <Field
                  name="password"
                  component={renderSignUp}
                  placeholder="Confirm Password"
                  type="password"
                  source="icon-password.svg"
                />
                <button className="sign__up__button">SIGN UP</button>
              </form>
              <div className="already__have__account">
                <p>Already have an account?</p>
                <Link to="/signup" className="login__now">
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
  form: 'signUpForm',
  validate,
})(SignUp);

export default connect(null)(formWrapper);
