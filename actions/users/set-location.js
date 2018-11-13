import { gql } from "apollo-boost";
import client from "../../Client";
export const SET_LOCATION_ERROR = "SET_LOCATION_ERROR";
export const SET_LOCATION = "SET_LOCATION";

export default (userId, location) => {
  return function(dispatch) {
    console.log(userId);
    querySetLocation(userId, location)
      .then(res => {
        console.log(res);
        dispatch({
          type: SET_LOCATION,
          payload: res.data.setLocation
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: SET_LOCATION_ERROR
        });
      });
  };
};

function querySetLocation(
  userId,
  { street, postalCode, city, country, houseNumber, addition }
) {
  const address = addition
    ? street + " " + houseNumber + addition
    : street + " " + houseNumber;
  return client.mutate({
    variables: { address, userId, postalCode, city, country },
    mutation: gql`
      mutation setLocation(
        $userId: Int!
        $address: String!
        $postalCode: String!
        $city: String!
        $country: String!
      ) {
        setLocation(
          userId: $userId
          address: $address
          postalCode: $postalCode
          city: $city
          country: $country
        ) {
          latitude
          longitude
        }
      }
    `
  });
}
