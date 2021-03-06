import "regenerator-runtime/runtime";
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "../scss/main.scss";

import store from "../store";

const Wrapper = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.object
};

export default Wrapper;
