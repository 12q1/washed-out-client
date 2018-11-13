import { FETCHED_FEED } from "../actions/users/fetch-feed";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_FEED:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
