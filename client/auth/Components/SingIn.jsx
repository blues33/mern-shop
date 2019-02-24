import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input";

const SingIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submited, setSubmit] = useState(false);
  const errors = {
    email: useValidation(email, validateEmail, "Не верный формат почты")
  };

  useEffect(() => {
    document.bgColor = "#BFD9F2"; /* pale aqua */
    document.title = "Shop | Вход в систему";
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
    }, 5000);
  };

  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Вход</h1>
        <hr />
        {submited
          ? errors === null
            ? ""
            : Object.values(errors).map(err => {
                return (
                  <div className="error" key={err}>
                    <p>{err}</p>
                  </div>
                );
              })
          : ""}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Почта
            <Input name="email" onChange={e => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Пароль
            <Input
              name="password"
              onChange={e => setPassword(e.target.value)}
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

const useValidation = (state, rule, errMessage) => {
  let err = null;

  if (rule(state) === true) {
    return err;
  }
  err = errMessage;
  return err;
};

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

export default SingIn;
