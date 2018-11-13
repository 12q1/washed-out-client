import { gql } from "apollo-boost";
import client from "../../Client";
export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export const USER_SIGNED_UP = "USER_SIGNED_UP";

export default user => {
  return function(dispatch) {
    querySignUp(user)
      .then(res => {
        console.log(res);
        dispatch({
          type: USER_SIGNED_UP,
          payload: res.data.signUp
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: USER_SIGNUP_ERROR
        });
      });
  };
};

function querySignUp({ name, email, password }) {
  return client.mutate({
    variables: { fullName: name, email, password },
    mutation: gql`
      mutation SignUp($fullName: String!, $email: String!, $password: String!) {
        signUp(fullName: $fullName, email: $email, password: $password) {
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
