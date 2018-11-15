import { CREATED_MESSAGE } from "../actions/messages/send-message";
import { FETCHED_MESSAGES } from "../actions/messages/fetch-messages";

export default (state = null, { type, payload }) => {
  switch (type) {
    case CREATED_MESSAGE:
      return state
        ? [...state, JSON.parse(JSON.stringify(payload))]
        : [JSON.parse(JSON.stringify(payload))];
    case FETCHED_MESSAGES:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
