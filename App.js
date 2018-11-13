import React, { Component } from "react";
import { View } from "react-native";
import styles from "./App.styles";

import { Router, Scene } from "react-native-router-flux";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import store from "./store";

import LaunchScene from "./screens/LaunchScene";
import SignUpContainer from "./screens/SignUpContainer";
import AccountDetails from "./screens/AccountDetails";
import FeedContainer from "./screens/FeedContainer";
import MyAccount from "./screens/MyAccount";
import Test from "./screens/Test";

import client from "./Client";

export default class WashedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Router>
              <Scene key="root">
                <Scene component={Test} />

                <Scene
                  key="launchScene"
                  component={LaunchScene}
                  title="Launch Scene"
                />
                <Scene
                  key="signUp"
                  component={SignUpContainer}
                  title="Sign Up"
                />
                <Scene
                  key="accountDetails"
                  component={AccountDetails}
                  title="Find Services"
                />
                <Scene
                  key="feed"
                  component={FeedContainer}
                  title="Feed"
                  initial={true}
                />
                <Scene
                  key="myAccount"
                  component={MyAccount}
                  title="My Account"
                  initial={true}
                />
              </Scene>
            </Router>
          </Provider>
        </ApolloProvider>
      </View>
    );
  }
}
