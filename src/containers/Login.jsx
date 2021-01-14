import React from 'react';
import { Field, reduxForm } from 'redux-form';
//importing connect
import { connect } from 'react-redux';
//importing link from react router
import { Link } from 'react-router-dom';
//login component
const Login = () => {
  const renderLogin = ({ label, input, type }) => {
    return (
      <div className="input__container">
        <label>{label}</label>
        <input type={type} />
      </div>
    );
  };
  return (
    <div className="login__page">
      <div className="wrapper">
        <div className="login__card">
          <div className="login__card__container">
            <h1>Log In</h1>
            <form>
              <Field
                name="email"
                component={renderLogin}
                label="Email"
                type="email"
              />
              <Field
                name="password"
                component={renderLogin}
                label="Password"
                type="password"
              />
            </form>
            <Link className="forgot__password">Forgot Password?</Link>
            <Link className="login__button">Login</Link>
            <div className="not__a__member">
              <p>Not a member?</p>
              <Link to="/signup">Signup now</Link>
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
