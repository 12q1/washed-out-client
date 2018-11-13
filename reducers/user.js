import { USER_SIGNED_UP } from "../actions/users/sign-up";
import { USER_SIGNED_IN } from "../actions/users/sign-in";

export default (state = null, { type, payload }) => {
  console.log(type);
  switch (type) {
    case USER_SIGNED_UP:
      return JSON.parse(JSON.stringify(payload));
    case USER_SIGNED_IN:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
