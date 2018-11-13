import { gql } from "apollo-boost";
import client from "../../Client";
export const USER_SIGN_IN_ERROR = "USER_SIGN_IN_ERROR";
export const USER_SIGNED_IN = "USER_SIGNED_IN";

export default user => {
  return dispatch => {
    console.log(user);
    mutateSignIn(user)
      .then(res => {
        console.log(res);
        dispatch({
          type: USER_SIGNED_IN,
          payload: res.data.login
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: USER_SIGN_IN_ERROR,
          payload: error
        });
      });
  };
};

function mutateSignIn({ email, password }) {
  return client.mutate({
    variables: { email, password },
    mutation: gql`
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          token
          id
          picture
        }
      }
    `
  });
}
