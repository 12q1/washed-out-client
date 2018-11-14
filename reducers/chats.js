import { FETCHED_CHATS } from "../actions/chats/fetch-chats";

export default (state = null, { type, payload }) => {
  switch (type) {
    case FETCHED_CHATS:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
