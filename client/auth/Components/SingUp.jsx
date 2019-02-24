import React from "react";
import { Link } from "react-router-dom";

import Input from "../../Components/Input";

const SingUp = () => {
  document.bgColor = "#BFD9F2"; /* pale aqua */

  const handleSubmit = e => {
    e.preventDefault();
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
            <p>Войти</p>
          </button>
          <Link to="/">Уже есть аккаунт?</Link>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
