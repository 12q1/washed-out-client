import { USER_SIGNED_UP } from "../actions/users/sign-up";

export default (state = null, { type, payload }) => {
  console.log(type);
  switch (type) {
    case USER_SIGNED_UP:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
