import React, { Component } from "react";
import { View } from "react-native";
import styles from "./App.styles";
import LaunchScene from "./screens/LaunchScene";
import SignUpContainer from "./screens/SignUpContainer";
import AccountDetails from "./screens/AccountDetails"
import { Provider } from "react-redux";
import store from "./store";
import { Router, Scene } from "react-native-router-flux";
import { ApolloProvider } from "react-apollo";

import FeedFormContainer from "./screens/FeedFormContainer";
import OrderForm from "./screens/OrderForm";

import FeedFormContainer from './screens/FeedFormContainer';
import MyAccount from "./screens/MyAccount";

import client from "./Client";
// import Test from "./screens/Test";

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
                  key="feedForm"
                  component={FeedFormContainer}
                  title="Feed Form"
                  initial={true}

                  <Scene
                  key="AccountDetails"
                  component={AccountDetails}
                  title="Find Services"
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
