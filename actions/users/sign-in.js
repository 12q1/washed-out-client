export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});

import ApolloClient, { gql } from "apollo-boost";

export const USER_SIGNED_IN = 'USER_SIGNED_IN';
export const USER_AUTH_ERROR = 'USER_AUTH_ERROR';


export default (user) => {
    return function(dispatch){
        querySignIn()
        dispatch({
            type: USER_SIGNED_IN,
            payload: result.data
          });
    }
      
}

function queryLogin({}){

    // get one user by id
    client.query({

        query: gql`
            login()
            `
        
    })
