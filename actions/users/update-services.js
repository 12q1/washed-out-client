import { gql } from "apollo-boost";
import client from "../../Client";
export const UPDATE_SERVICE_ERROR = "UPDATE_SERVICE_ERROR";
export const UPDATED_SERVICES = "UPDATED_SERVICES";

export default (userId, services) => {
  return function(dispatch) {
    console.log(userId);
    querySetLocation(userId, services)
      .then(res => {
        console.log(res);
        dispatch({
          type: UPDATED_SERVICES,
          payload: res
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: UPDATE_SERVICE_ERROR
        });
      });
  };
};

function querySetLocation(userId, { washing, drying, ironing }) {
  return client.mutate({
    variables: { userId, washing, drying, ironing },
    mutation: gql`
      mutation updateServices(
        $userId: Int!
        $washing: Boolean
        $drying: Boolean
        $ironing: Boolean
      ) {
        updateServices(
          userId: $userId
          washing: $washing
          drying: $drying
          ironing: $ironing
        ) {
          washing
          drying
          ironing
        }
      }
    `
  });
}
