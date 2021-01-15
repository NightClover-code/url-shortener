import React, { Component } from 'react';
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
class SignUp extends Component {
  render() {
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
                <SignUpForm onSubmit={this.props.handleSubmit} />
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
  }
}

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
