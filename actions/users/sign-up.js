import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://172.16.29.196:4000/graphql",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export const USER_SIGNED_UP = "USER_SIGNED_UP";

export default user => {
  return function(dispatch) {
    mutateSignUp(user)
      .then(res => {
        console.log(res);
        dispatch({
          type: USER_SIGNED_UP,
          payload: "hi"
        });
      })
      .catch(error => {
        dispatch({
          type: USER_SIGNUP_ERROR,
          payload: error
        });
      });
  };
};

function mutateSignUp({ name, email, password }) {
  return client.query({
    mutation: gql`
      mutation {
        signUp(fullName: ${name}, email: ${email}, password: ${password}) {
          id
        }
      }
    `
  });
}
