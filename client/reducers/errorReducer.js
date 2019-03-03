import { REQUEST_FAILED, REQUEST_SUCCESS } from "../actions/types";

const initialState = {
  errorMessage: null
};

export default function(state = {}, { type, error }) {
  if (type === REQUEST_SUCCESS) {
    return { errorMessage: null };
  } else if (error) {
    return {
      errorMessage: error
    };
  }
  return state;
}
