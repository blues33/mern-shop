import { put, call, takeEvery } from "redux-saga/effects";

import { REGISTER_USER } from "../actions/types";
import { registerService } from "../services/api";
import { requestSuccess, requestFailed } from "../actions/authActions";

export default function* watchRegister() {
  yield takeEvery(REGISTER_USER, registerWorker);
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
