import ApolloClient from "apollo-boost";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://172.16.29.196:4000/graphql"
}));
