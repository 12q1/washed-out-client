import ApolloClient, { gql } from "apollo-boost";


export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';
export const USER_SIGNED_UP = 'USER_SIGNED_UP'

export default (user) => {
  return (dispatch) => {
      querySignUp(user).then(res => {

        dispatch({
            type: USER_SIGNED_UP
        })
      })
        .catch((error) => {
          dispatch({
            type: USER_SIGNUP_ERROR,
            payload: error
          })
        });
    }
      }
    

function querySignUp (user) {
    return client.query({
        query: gql`
            mutation{
                signUp(
                  fullName:${user.fullName}
                  email:${user.email}
                password:${user.password}
                  bio:${user.bio}
                  picture:${user.picture}
                ){
                  id
                }
          `
      })
  }
