import ApolloClient from "apollo-boost";
import { AsyncStorage } from "react-native";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://172.16.29.81:4000/graphql",
  request: async operation => {
    const token = await AsyncStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
}));
