import { gql } from "apollo-boost";
import client from "../../Client";
export const UPDATE_SERVICE_ERROR = "UPDATE_SERVICE_ERROR";
export const UPDATED_SERVICES = "UPDATED_SERVICES";

export default (id, services) => {
  return function(dispatch) {
    console.log(id);
    queryUpdateServices(id, services)
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

function queryUpdateServices(
  id,
  { washing, drying, ironing, folding, pickup, delivery }
) {
  return client.mutate({
    variables: {
      id,
      services: { washing, drying, ironing, folding, pickup, delivery }
    },
    mutation: gql`
      mutation updateServices($id: Int!, $services: ServicesInput) {
        updateServices(id: $id, services: $services) {
          id
          washing
          drying
          ironing
          folding
          delivery
          pickup
        }
      }
    `
  });
}
