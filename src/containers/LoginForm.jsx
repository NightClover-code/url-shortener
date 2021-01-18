import React, { Component } from 'react';
//importing field from redux form
import { Field } from 'redux-form';
//importing link from react router
import { Link } from 'react-router-dom';
//importing connect and actions
import { connect } from 'react-redux';
import signUserIn from '../actions/signUserIn';
//login form component
class LoginForm extends Component {
  //input component
  renderLogin = ({ placeholder, input, source, type, meta }) => {
    return (
      <div className="input__container">
        <div className="input__container">
          <input
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            {...input}
          />
          <div className="icon__input">
            <img src={`./images/${source}`} alt="" />
          </div>
        </div>
        {this.props.renderError(meta)}
      </div>
    );
  };
  //receiving submited values
  onFormSubmit = values => {
    this.props.signUserIn(values);
  };
  //special errors
  specialErrors = () => {
    if (this.props.currentUser.error !== '') {
      return this.props.currentUser.error;
    }
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit(this.onFormSubmit)}>
        <Field
          name="email"
          component={this.renderLogin}
          placeholder="Email"
          type="email"
          source="icon-email.svg"
        />
        {this.specialErrors()}
        <Field
          name="password"
          component={this.renderLogin}
          placeholder="Password"
          type="password"
          source="icon-password.svg"
        />
        <Link className="forgot__password" to="">
          Forgot your password?
        </Link>
        <button className="login__button">LOGIN</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { signUserIn })(LoginForm);
