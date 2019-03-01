import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import Input from "../../Components/Input";
import { registerUser } from "../../actions/authActions";

const SingUp = props => {
  document.bgColor = "#BFD9F2"; /* pale aqua */
  document.title = "Shop | Регистрация";

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch(registerUser());
  };
  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Регистрация</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName" className="firstName">
            Имя
            <Input name="firstName" />
          </label>

          <label htmlFor="lastName" className="lastName">
            Фамилия
            <Input name="lastName" />
          </label>
          <label htmlFor="email">
            Почта
            <Input name="email" />
          </label>
          <label htmlFor="phone">
            Телефон
            <Input name="phone" />
          </label>
          <label htmlFor="password">
            Пароль
            <Input name="password" />
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

const maptStateToProps = state => ({});

export default connect(state => {
  return state;
})(SingUp);
