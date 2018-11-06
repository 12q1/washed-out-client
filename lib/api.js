import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:4011/graphql"
});

function queryUsers(id) {

    return client.query({
      query: gql`
          {
            user(id: ${id}) {
                email
                password
          }
        `
    }).then();
}
