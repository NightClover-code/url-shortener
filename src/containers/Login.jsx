import React from 'react';
//importing styles
import '../../src/styles/css/login.css';

import { Field, reduxForm } from 'redux-form';

//importing link from react router
import { Link } from 'react-router-dom';
//importing connect
import { connect } from 'react-redux';
//login component
const Login = () => {
  const renderLogin = ({ placeholder, input, source, type }) => {
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
                <div className="facebook__icon icon">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div className="google__icon icon">
                  <i class="fab fa-google"></i>
                </div>
                <div className="twitter__icon icon">
                  <i class="fab fa-twitter"></i>
                </div>
              </div>
              <p>or use your email account:</p>
              <form>
                <Field
                  name="email"
                  component={renderLogin}
                  placeholder="Email"
                  type="email"
                  source="icon-email.svg"
                />
                <Field
                  name="password"
                  component={renderLogin}
                  placeholder="Password"
                  type="password"
                  source="icon-password.svg"
                />
              </form>
              <Link className="forgot__password">Forgot your password?</Link>
              <button className="login__button">LOGIN</button>
              <div className="not__a__member">
                <p>Not a member?</p>
                <Link to="/signup">Signup now</Link>
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
  form: 'loginForm',
  validate,
})(Login);

export default connect(null)(formWrapper);
