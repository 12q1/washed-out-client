import { CREATED_SERVICE_REQUEST } from "../actions/service-requests/create-service-request";

export default (state = null, { type, payload }) => {
  switch (type) {
    case CREATED_SERVICE_REQUEST:
      return JSON.parse(JSON.stringify(payload));
    default:
      return state;
  }
};
