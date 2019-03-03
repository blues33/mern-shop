import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { registerUser } from "../../actions/authActions";

const RegisterForm = ({ errors, touched, isSubmitting, errorMessage }) => {
  useEffect(() => {
    document.bgColor = "#BFD9F2"; /* pale aqua */
    document.title = "Shop | Регистрация";
  });
  return (
    <div className="wrapper">
      <div className="auth-form">
        <h1>Регистрация</h1>
        <hr />
        {errorMessage && <p>{errorMessage}</p>}
        <Form>
          <label htmlFor="firstName" className="firstName">
            Имя
            <Field name="firstName" type="text" />
            <div className="error-message">
              {touched.firstName && errors.firstName && (
                <p>{errors.firstName}</p>
              )}
            </div>
          </label>

          <label htmlFor="lastName" className="lastName">
            Фамилия
            <Field name="lastName" type="text" />
            <div className="error-message">
              {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
            </div>
          </label>
          <label htmlFor="email">
            Почта
            <Field name="email" type="email" />
            <div className="error-message">
              {touched.email && errors.email && <p>{errors.email}</p>}
            </div>
          </label>
          <label htmlFor="phone">
            Телефон
            <Field name="phone_number" type="text" />
            <div className="error-message">
              {touched.phone_number && errors.phone_number && (
                <p>{errors.phone_number}</p>
              )}
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
            <p>Зарегистрироваться</p>
          </button>
          <Link to="/">Уже есть аккаунт?</Link>
        </Form>
      </div>
    </div>
  );
};

const validatedSingUp = withFormik({
  mapPropsToValues() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone_number: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Поле должно быть не менее чем 2 символа")
      .max(16, "Поле должно быть менее 16 символов")
      .required("Поле обязательное к заполнению"),
    lastName: yup
      .string()
      .min(2, "Поле должно быть не менее чем 2 символа")
      .max(16, "Поле должно быть менее 16 символов")
      .required("Поле обязательное к заполнению"),
    email: yup
      .string()
      .email("Не верный формат почты")
      .required("Поле обязательное к заполнению"),
    phone_number: yup
      .string()
      .min(6, "Поле должно быть не менее 6 символов")
      .max(16, "Поле должно быть менее 16 символов")
      .required("Поле обязательное к заполнению"),
    password: yup
      .string()
      .min(8, "Поле должно быть не менее 8 символов")
      .max(16, "Поле должно быть менее 16 символов")
      .required("Поле обязательное к заполнению")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting }) {
    const newUser = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      phone_number: values.phone_number,
      password: values.password
    };
    props.registerUser(newUser);

    setSubmitting(false);

    resetForm();
  }
})(RegisterForm);

const maptStateToProps = state => ({
  errorMessage: state.errorReducer.errorMessage
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => {
    dispatch(registerUser(user));
  }
});

const SingUp = connect(
  maptStateToProps,
  mapDispatchToProps
)(validatedSingUp);

RegisterForm.propTypes = {
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool
};

export default SingUp;
