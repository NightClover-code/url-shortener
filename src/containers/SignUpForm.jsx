import React, { Component } from 'react';
//importing field
import { Field } from 'redux-form';
//form component
class SignUpForm extends Component {
  //rendered input component
  renderSignUp = ({ type, placeholder, input, source }) => {
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
      </div>
    );
  };
  //receiving submited values
  onFormSubmit = values => {
    console.log(values);
  };
  render() {
    return (
      <form onSubmit={this.props.onSubmit(this.onFormSubmit)}>
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
          name="password-confirmed"
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
export default SignUpForm;
