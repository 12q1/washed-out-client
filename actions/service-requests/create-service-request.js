import { gql } from "apollo-boost";
import client from "../../Client";
export const CREATE_SERVICE_REQUEST_ERROR = "CREATE_SERVICE_REQUEST_ERROR";
export const CREATED_SERVICE_REQUEST = "CREATED_SERVICE_REQUEST";

export default (fromId, toId, serviceRequest) => {
  return function(dispatch) {
    queryCreateServiceRequest(fromId, toId, serviceRequest)
      .then(res => {
        dispatch({
          type: CREATED_SERVICE_REQUEST,
          payload: res.data.createServiceRequest
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: CREATE_SERVICE_REQUEST_ERROR
        });
      });
  };
};

function queryCreateServiceRequest(fromId, toId, serviceRequest) {
  return client.mutate({
    variables: {
      fromId,
      toId,
      ...serviceRequest
    },
    mutation: gql`
      mutation CreateServiceRequest(
        $fromId: Int!
        $toId: Int!
        $items: [ItemInput!]!
        $specifications: String
        $services: ServicesInput
        $additionalCharge: Float
      ) {
        createServiceRequest(
          fromId: $fromId
          toId: $toId
          items: $items
          specifications: $specifications
          services: $services
          additionalCharge: $additionalCharge
        ) {
          from {
            id
            fullName
          }
          to {
            id
            fullName
          }
          items {
            itemType
            count
          }
          services {
            washing
            drying
            ironing
            folding
            delivery
            pickup
          }
          additionalCharge
        }
      }
    `
  });
}
