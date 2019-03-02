import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const SingIn = ({ errors, touched, isSubmitting }) => {
  useEffect(() => {
    document.bgColor = "#BFD9F2"; /* pale aqua */
    document.title = "Shop | Вход в систему";
  });

  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Вход</h1>
        <hr />
        <Form>
          <label htmlFor="email">
            Почта
            <Field name="email" type="email" />
            <div className="error-message">
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
          </label>
          <label htmlFor="password">
            Пароль
            <Field name="password" type="password" />
            <div className="error-message">
              {touched.password && errors.password && <p>{errors.password}</p>}
            </div>
          </label>

          <button disabled={isSubmitting} type="submit">
            <p>Войти</p>
          </button>
          <Link to="/singup">Не зарегистрированы?</Link>
        </Form>
      </div>
    </div>
  );
};

const formikBag = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .email("Не верный формат почты")
      .required("Поле обязательное к заполнению"),
    password: yup
      .string()
      .min(8, "Пароль должен быть не менее 8 символов")
      .max(16, "Пароль должен быть менее  16 символов")
      .required("Поле обязательное к заполнению")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    // how i can handle errors and set it when get response from server, somthing like bad request or etc
    setTimeout(() => {
      if (values.email === "a@gmail.com") {
        setErrors({ email: "Данная почта уже используется" });
      } else {
        console.log(values);
        resetForm();
      }
      setSubmitting(false);
    }, 2000);
  }
})(SingIn);

export default formikBag;
