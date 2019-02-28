import { REGISTER_USER } from "../actions/type";

const initialState = {
  users: []
};

export default function(state = initialState, { type }) {
  switch (type) {
    case REGISTER_USER: {
      return {
        ...state,
        users: "new user"
      };
    }
    default:
      return state;
  }
}
