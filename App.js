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
import AddInfoForm from "./screens/AddInfoForm";
import Test from "./screens/Test";
import client from "./Client";
import LoginContainer from "./screens/LoginContainer";
import AddLocationForm from "./screens/AddLocationForm";
import AddServicesForm from "./screens/AddServicesForm";
import AddServiceFeesForm from "./screens/AddServiceFeesForm";
import CreateServiceRequestForm from "./screens/CreateServiceRequestForm";
import ChatContainer from "./screens/ChatContainer";

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
                  title="Home"
                  initial={true}
                />
                <Scene
                  key="signUp"
                  component={SignUpContainer}
                  title="Sign Up"
                />
                <Scene key="login" component={LoginContainer} title="Sign Up" />
                <Scene
                  key="accountDetails"
                  component={AccountDetails}
                  title="Find Services"
                />
                <Scene
                  key="feed"
                  component={FeedContainer}
                  title="Feed"
                  hideNavBar
                  swipeEnabled={false}
                />

                <Scene
                  key="addInfoForm"
                  component={AddInfoForm}
                  title="Add Info"
                  hideNavBar
                />
                <Scene
                  key="addLocationForm"
                  component={AddLocationForm}
                  title="Add Location"
                  hideNavBar
                />
                <Scene
                  key="addServicesForm"
                  component={AddServicesForm}
                  title="Add Services"
                  hideNavBar
                />
                <Scene
                  key="addServiceFeesForm"
                  component={AddServiceFeesForm}
                  title="Add Services"
                  hideNavBar
                />
                <Scene
                  key="createServiceRequestForm"
                  component={CreateServiceRequestForm}
                  title="Create Service Request"
                />
                <Scene key="chat" component={ChatContainer} title="Chat" />
              </Scene>
            </Router>
          </Provider>
        </ApolloProvider>
      </View>
    );
  }
}
