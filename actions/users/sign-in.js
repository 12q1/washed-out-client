import { gql } from "apollo-boost";
import client from "../../Client";
export const USER_SIGN_IN_ERROR = "USER_SIGN_IN_ERROR";
export const USER_SIGNED_IN = "USER_SIGNED_IN";

export default user => {
  return dispatch => {
    mutateSignIn(user)
      .then(res => {
        console.log(JSON.stringify(res));
        dispatch({
          type: USER_SIGNED_IN,
          payload: "hi"
        });
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        dispatch({
          type: USER_SIGN_IN_ERROR,
          payload: error
        });
      });
  };
};

function mutateSignIn({ email, password }) {
  return client.mutate({
    variables: { fullName: email, password },
    mutation: gql`
      mutation SignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          id
          fullName
          picture
          status
          services {
            id
            washing
            drying
            ironing
            folding
            delivery
            pickup
          }
          serviceFees {
            id
            washing
            drying
            ironing
            folding
            delivery
            pickup
          }
        }
      }
    `
  });
}
