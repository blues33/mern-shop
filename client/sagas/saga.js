import { put, call, takeEvery } from "redux-saga/effects";

import { REGISTER_USER } from "../actions/types";

import {
  requestSuccess,
  requestFailed,
  registerUser
} from "../actions/authActions";
import Axios from "axios";

export default function* watchRegister() {
  yield takeEvery(REGISTER_USER, registerWorker);
}

function* registerWorker(action) {
  console.log(action.payload);
  try {
    yield (call = Axios.post("http://127.0.0.1:3000/api/user/", action.payload)
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log(response.error);
      }));
    yield put(requestSuccess());
  } catch (e) {
    yield put(requestFailed());
  }
}
