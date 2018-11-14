import ApolloClient from "apollo-boost";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://172.16.30.94:4000/graphql"
}));
