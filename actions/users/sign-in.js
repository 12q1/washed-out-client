import { gql } from "apollo-boost";
import { client } from "../../App";
export const USER_SIGNIN_ERROR = "USER_SIGNIN_ERROR";
export const USER_SIGNED_IN = "USER_SIGNED_IN";

export default user => {
  return (dispatch) => {
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
          type: USER_SIGNIN_ERROR,
          payload: error
        });
      });
  };
};

function mutateSignIn({ email, password }) {
  return client.mutate({
    variables: { fullName: email, password },
    mutation: gql`
      mutation SignIn(
        $email: String!
        $password: String!
      ) {
        signIn(
          email: $email
          password: $password
        ) {
          fullName
        }
      }
    `
  });
}
