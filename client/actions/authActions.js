import { REGISTER_USER, REQUEST_SUCCESS, REQUEST_FAILED } from "./types";

export const registerUser = user => ({
  type: REGISTER_USER,
  payload: user
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS
});

export const requestFailed = error => ({
  type: REQUEST_FAILED,
  payload: error
});
