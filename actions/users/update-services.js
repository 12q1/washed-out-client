import { gql } from "apollo-boost";
import client from "../../Client";
export const UPDATE_SERVICE_ERROR = "UPDATE_SERVICE_ERROR";
export const UPDATED_SERVICES = "UPDATED_SERVICES";

export default (id, services) => {
  return function(dispatch) {
    console.log(id);
    querySetLocation(id, services)
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

function querySetLocation(id, { washing, drying, ironing }) {
  return client.mutate({
    variables: { id, washing, drying, ironing },
    mutation: gql`
      mutation updateServices(
        $id: Int!
        $washing: Boolean
        $drying: Boolean
        $ironing: Boolean
      ) {
        updateServices(
          id: $id
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
