import { FETCHED_FEED_ITEM } from "../actions/users/fetch-feed";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_FEED_ITEM:
      console.log(payload);
      return state
        ? [...state, JSON.parse(JSON.stringify(payload))]
        : [JSON.parse(JSON.stringify(payload))];
    default:
      return state;
  }
};
