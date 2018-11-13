import { gql } from "apollo-boost";
import client from "../../Client";
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR";
export const UPDATED_PROFILE = "UPDATED_PROFILE";

export default (userId, user) => {
  return function(dispatch, getState) {
    queryUpdateProfile(userId, user)
      .then(res => {
        dispatch({
          type: UPDATED_PROFILE,
          payload: res.data.updateProfile
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: UPDATE_PROFILE_ERROR
        });
      });
  };
};

function queryUpdateProfile(userId, { name, bio, picture }) {
  return client.mutate({
    variables: { userId, fullName: name, bio, picture },
    mutation: gql`
      mutation UpdateProfile(
        $userId: Int!
        $fullName: String!
        $bio: String
        $picture: String
      ) {
        updateProfile(
          userId: $userId
          fullName: $fullName
          bio: $bio
          picture: $picture
        ) {
          fullName
          id
          services {
            id
          }
          serviceFees {
            id
          }
        }
      }
    `
  });
}
