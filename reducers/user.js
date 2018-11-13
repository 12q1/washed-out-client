import { USER_SIGNED_UP } from "../actions/users/sign-up";
import { USER_SIGNED_IN } from "../actions/users/sign-in";
import { UPDATED_PROFILE } from "../actions/users/update-user-info";
import { SET_LOCATION } from "../actions/users/set-location";
import { UPDATED_SERVICES } from "../actions/users/update-services";
import { UPDATED_SERVICE_FEES } from "../actions/users/update-service-fees";

export default (state = null, { type, payload }) => {
  console.log(type);
  switch (type) {
    case USER_SIGNED_UP:
      return JSON.parse(JSON.stringify(payload));
    case USER_SIGNED_IN:
      return JSON.parse(JSON.stringify(payload));
    case UPDATED_PROFILE:
      return JSON.parse(JSON.stringify(payload));
    case SET_LOCATION:
      return { ...state, location: { ...payload } };
    case UPDATED_SERVICES:
      return { ...state, services: { ...payload, set: true } };
    case UPDATED_SERVICE_FEES:
      return { ...state, serviceFees: { ...payload, set: true } };
    default:
      return state;
  }
};
