import ApolloClient from "apollo-boost";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://172.16.29.81:4000/graphql"
}));
