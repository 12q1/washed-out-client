import { FETCHED_ACCOUNT_DETAILS } from "../actions/users/fetch-account-details";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_ACCOUNT_DETAILS:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
