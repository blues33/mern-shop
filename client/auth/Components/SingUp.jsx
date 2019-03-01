import React, { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Input from "../../Components/Input";
import { registerUser } from "../../actions/authActions";

const SingUp = props => {
  document.bgColor = "#BFD9F2"; /* pale aqua */
  document.title = "Shop | Регистрация";

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleOnChange = event => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      first_name: state.firstName,
      last_name: state.lastName,
      email: state.email,
      phone_number: state.phone_number,
      password: state.password
    };

    props.registerUser(newUser);
  };
  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Регистрация</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="firstName">
            Имя
            <Input name="firstName" onChange={e => handleOnChange(e)} />
          </label>

          <label htmlFor="lastName" className="lastName">
            Фамилия
            <Input name="lastName" onChange={e => handleOnChange(e)} />
          </label>
          <label htmlFor="email">
            Почта
            <Input name="email" onChange={e => handleOnChange(e)} />
          </label>
          <label htmlFor="phone">
            Телефон
            <Input name="phone_number" onChange={e => handleOnChange(e)} />
          </label>
          <label htmlFor="password">
            Пароль
            <Input name="password" onChange={e => handleOnChange(e)} />
          </label>

          <button type="submit">
            <p>Зарегистрироваться</p>
          </button>
          <Link to="/">Уже есть аккаунт?</Link>
        </form>
      </div>
    </div>
  );
};

const maptStateToProps = state => ({
  user: state.userReducer
});

export default connect(
  maptStateToProps,
  { registerUser }
)(SingUp);
