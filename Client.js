import ApolloClient from "apollo-boost";
import { AsyncStorage } from "react-native";

// Create the apollo client
export default (client = new ApolloClient({
  uri: "http://192.168.2.15:4000/graphql",
  request: async operation => {
    const token = await AsyncStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
}));
