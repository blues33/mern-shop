import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";

const SingIn = () => {
  document.bgColor = "#BFD9F2"; /* pale aqua */

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Вход</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Почта
            <Input name="email" />
          </label>
          <label htmlFor="password">
            Пароль
            <Input name="password" />
          </label>

          <button type="submit">
            <p>Войти</p>
          </button>
          <Link to="/singup">Не зарегистрированы?</Link>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
