import React, { Component } from "react";
import { View } from "react-native";
import styles from "./App.styles";
import LaunchScene from "./screens/LaunchScene";
import SignUpContainer from "./screens/SignUpContainer";
import { Provider } from "react-redux";
import store from "./store";
import { Router, Scene } from "react-native-router-flux";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// Create the apollo client
export const client = new ApolloClient({
  uri: "http://172.16.29.196:4000/graphql"
});
export default class WashedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Router>
              <Scene key="root">
                <Scene
                  key="launchScene"
                  component={LaunchScene}
                  title="Launch Scene"
                  initial={true}
                />
                <Scene
                  key="signUp"
                  component={SignUpContainer}
                  title="Sign Up"
                />
              </Scene>
            </Router>
          </Provider>
        </ApolloProvider>
      </View>
    );
  }
}
