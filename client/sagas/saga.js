import { put, takeEvery } from "redux-saga/effects";

import { REGISTER_USER } from "../actions/type";

import { requestSuccess } from "../actions/authActions";

export default function* watchRegister() {
  yield takeEvery(REGISTER_USER, registerUser);
}

function* registerUser() {
  console.log("register user with saga");
  yield put(requestSuccess());
}
