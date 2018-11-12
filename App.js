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
import ApolloClient from "apollo-boost";
import FeedFormContainer from './screens/FeedFormContainer';
import OrderForm from "./screens/OrderForm";
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
                  <Scene
                  key="AccountDetails"
                  component={AccountDetails}
                  title="Find Services"
                  />
                <Scene 
                    key="feedForm"
                    component={FeedFormContainer}
                    title="Feed Form"
                />
                <Scene
                  key="orderForm"
                  component={OrderForm}
                  title="Make an Order"
                />
              </Scene>
            </Router>
          </Provider>
        </ApolloProvider>
      </View>
    );
  }
}