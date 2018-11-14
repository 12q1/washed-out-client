import ApolloClient from "apollo-boost";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://192.168.0.13/graphql"
}));
