import {
  REGISTER_USER,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
  LOGIN_REQUEST
} from "./types";

export const registerUser = user => ({
  type: REGISTER_USER,
  payload: user
});

export const loginUser = user => ({
  type: LOGIN_REQUEST,
  payload: user
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS
});

export const requestFailed = error => ({
  type: REQUEST_FAILED,
  error
});
