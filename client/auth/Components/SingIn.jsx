import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../../Components/Input";

const SingIn = () => {
  const [state, setState] = useState({ email: "", password: "" });
  useEffect(() => {
    document.bgColor = "#BFD9F2"; /* pale aqua */
    document.title = "Shop | Вход в систему";
  });

  const handleChange = event => {
    const { name, value } = event;
    setState(prevState => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };

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
            <Input name="email" value={state.email} onChange={handleChange} />
          </label>
          <label htmlFor="password">
            Пароль
            <Input
              name="password"
              value={state.password}
              onChange={handleChange}
            />
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
