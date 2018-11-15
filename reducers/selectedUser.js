import { FETCHED_ACCOUNT_DETAILS } from "../actions/users/fetch-account-details";
import { CLEAR_ACCOUNT_DETAILS } from "../actions/users/clear-account-details";
import { CREATED_COMMENT } from "../actions/comments/create-comment";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_ACCOUNT_DETAILS:
      return JSON.parse(JSON.stringify(payload));
    case CLEAR_ACCOUNT_DETAILS:
      return null;
    case CREATED_COMMENT:
      const { comments, ...selectedUser } = state;
      return {
        comments: comments ? [...comments, payload] : [payload],
        ...selectedUser
      };
    default:
      return state;
  }
};
