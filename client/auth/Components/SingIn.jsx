import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { loginUser } from "../../actions/authActions";

const SingInForm = ({ errors, touched, isSubmitting, errorMessage }) => {
  useEffect(() => {
    document.bgColor = "#BFD9F2"; /* pale aqua */
    document.title = "Shop | Вход в систему";
  });

  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Вход</h1>
        <hr />
        {errorMessage && <p>{errorMessage}</p>}
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

const validatedSingIn = withFormik({
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
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    // how i can handle errors and set it when get response from server, somthing like bad request or etc
    props.loginUser(values);
    setSubmitting(false);
  }
})(SingInForm);

const maptStateToProps = state => ({
  errorMessage: state.errorReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
  loginUser: user => {
    dispatch(loginUser(user));
  }
});

const SingIn = connect(
  maptStateToProps,
  mapDispatchToProps
)(validatedSingIn);

export default SingIn;
