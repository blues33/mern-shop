import React, { useEffect } from "react";

import Input from "../../Components/Input";

const SingIn = () => {
  document.bgColor = "#BFD9F2"; /* pale aqua */

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1>Вход</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Почта
            <Input name="email" placeholder="почта" />
          </label>
          <label htmlFor="password">
            Пароль
            <Input name="password" placeholder="пароль" />
          </label>

          <button type="submit">
            <p>Войти</p>
          </button>
          <small>Не зарегистрированы?</small>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
