import React from 'react';
//importing field from redux form
import { Field } from 'redux-form';
//importing link from react router
import { Link } from 'react-router-dom';
//login form component
const LoginForm = () => {
  //input component
  const renderLogin = ({ placeholder, input, source, type }) => {
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
  return (
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
      <Link className="forgot__password">Forgot your password?</Link>
      <button className="login__button">LOGIN</button>
    </form>
  );
};

export default LoginForm;
