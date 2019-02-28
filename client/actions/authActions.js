import { REGISTER_USER, REQUEST_SUCCESS } from "./type";

export const registerUser = () => ({
  type: REGISTER_USER
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS
});
