import { FETCHED_ACCOUNT_DETAILS } from "../actions/users/fetch-account-details";
import { CLEAR_ACCOUNT_DETAILS } from "../actions/users/clear-account-details";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_ACCOUNT_DETAILS:
      return JSON.parse(JSON.stringify(payload));
    case CLEAR_ACCOUNT_DETAILS:
      return null;
    default:
      return state;
  }
};
