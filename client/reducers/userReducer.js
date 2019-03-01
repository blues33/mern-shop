import {
  REGISTER_USER,
  REQUEST_SUCCESS,
  REQUEST_FAILED
} from "../actions/types";

const initialState = {
  users: [],
  user: [],
  status: "nothing to see here",
  error: ""
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        user: payload
      };
    }
    case REQUEST_SUCCESS: {
      return {
        ...state,
        status: "nothing to see here"
      };
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        status: "request failed",
        error: payload
      };
    }
    default:
      return state;
  }
}
