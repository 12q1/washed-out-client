import { gql } from "apollo-boost";
import client from "../../Client";
export const UPDATE_SERVICE_FEES_ERROR = "UPDATE_SERVICE_FEES_ERROR";
export const UPDATED_SERVICE_FEES = "UPDATED_SERVICE_FEES";

export default (id, serviceFees) => {
  return function(dispatch) {
    console.log(id);
    queryUpdateServiceFees(id, serviceFees)
      .then(res => {
        dispatch({
          type: UPDATED_SERVICE_FEES,
          payload: res.data.updateServiceFees
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: UPDATE_SERVICE_FEES_ERROR
        });
      });
  };
};

function queryUpdateServiceFees(
  id,
  { washing, drying, ironing, folding, pickup, delivery, base }
) {
  return client.mutate({
    variables: {
      id,
      serviceFees: { washing, drying, ironing, folding, pickup, delivery, base }
    },
    mutation: gql`
      mutation updateServiceFees($id: Int!, $serviceFees: ServiceFeesInput) {
        updateServiceFees(id: $id, serviceFees: $serviceFees) {
          id
          washing
          drying
          ironing
          folding
          delivery
          pickup
          base
        }
      }
    `
  });
}
