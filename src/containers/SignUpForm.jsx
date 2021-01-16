import React, { Component } from 'react';
//importing field
import { Field } from 'redux-form';
//improting connect
import { connect } from 'react-redux';
//importing actions
import { createUser } from '../actions';
//form component
class SignUpForm extends Component {
  //rendered input component
  renderSignUp = ({ type, placeholder, input, source, meta }) => {
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
    this.props.createUser(values);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit(this.onFormSubmit)}>
        <Field
          name="username"
          component={this.renderSignUp}
          placeholder="Username"
          type="text"
          source="icon-user.svg"
        />
        <Field
          name="email"
          component={this.renderSignUp}
          placeholder="Email"
          type="email"
          source="icon-email.svg"
        />
        <Field
          name="password"
          component={this.renderSignUp}
          placeholder="Password"
          type="password"
          source="icon-password.svg"
        />
        <Field
          name="passwordConfirmed"
          component={this.renderSignUp}
          placeholder="Confirm Password"
          type="password"
          source="icon-password.svg"
        />
        <button className="sign__up__button">SIGN UP</button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { createUser })(SignUpForm);
