import { gql } from "apollo-boost";
import { client } from "../../App";
export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export const USER_SIGNED_UP = "USER_SIGNED_UP";

export default user => {
  return function(dispatch) {
    mutateSignUp(user)
      .then(res => {
        console.log(JSON.stringify(res));
        dispatch({
          type: USER_SIGNED_UP,
          payload: "hi"
        });
      })
      .catch(error => {
        console.log(JSON.stringify(error));
        dispatch({
          type: USER_SIGNUP_ERROR,
          payload: error
        });
      });
  };
};

function mutateSignUp({ name, email, password }) {
  return client.mutate({
    variables: { fullName: name, email, password, bio: "hello" },
    mutation: gql`
      mutation SignUp(
        $fullName: String!
        $email: String!
        $password: String!
        $bio: String!
      ) {
        signUp(
          fullName: $fullName
          email: $email
          password: $password
          bio: $bio
        ) {
          fullName
        }
      }
    `
  });
}
