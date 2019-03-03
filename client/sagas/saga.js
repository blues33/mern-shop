import { put, call, takeEvery } from "redux-saga/effects";

import { REGISTER_USER, LOGIN_REQUEST } from "../actions/types";
import { registerService, loginService } from "../services/api";
import { requestSuccess, requestFailed } from "../actions/authActions";

export default function* watchRegister() {
  yield takeEvery(REGISTER_USER, registerWorker);
  yield takeEvery(LOGIN_REQUEST, loginWorker);
}

function* registerWorker(action) {
  console.log(action.payload);
  try {
    yield call(registerService, action.payload);
    yield put(requestSuccess());
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}

function* loginWorker(action) {
  try {
    yield call(loginService, action.payload);
    yield put(requestSuccess());
  } catch (error) {
    yield put(requestFailed(error.message));
  }
}
