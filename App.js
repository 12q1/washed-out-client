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
import History from "./screens/History";
import CreateServiceRequestForm from "./screens/CreateServiceRequestForm";
import NavScreen from "./screens/NavScreen";
import MyAccount from "./screens/MyAccount";
import EditMyAccount from "./screens/EditMyAccount";
import ChatContainer from "./screens/ChatContainer";
import CreateReview from "./components/CreateReview";
import ChatBrowser from "./screens/ChatBrowser";
import t from 'tcomb-form-native';

t.form.Form.stylesheet.textbox.normal.color= '#FFFFFF'
t.form.Form.stylesheet.controlLabel.normal.color= '#FFFFFF'
t.form.Form.stylesheet.textbox.normal.borderWidth = 0;
t.form.Form.stylesheet.textbox.error.borderWidth = 0;
t.form.Form.stylesheet.textbox.normal.marginBottom = 0;
t.form.Form.stylesheet.textbox.error.marginBottom = 0;
t.form.Form.stylesheet.textboxView.normal.borderWidth = 0;
t.form.Form.stylesheet.textboxView.error.borderWidth = 0;
t.form.Form.stylesheet.textboxView.normal.borderRadius = 0;
t.form.Form.stylesheet.textboxView.error.borderRadius = 0;
t.form.Form.stylesheet.textboxView.normal.borderBottomWidth = 1;
t.form.Form.stylesheet.textboxView.normal.borderBottomColor = "#FFFFFF";
t.form.Form.stylesheet.textboxView.error.borderBottomWidth = 1;
t.form.Form.stylesheet.textboxView.normal.marginBottom = 5;
t.form.Form.stylesheet.textboxView.error.marginBottom = 5;

//change the form into material UI



export default class WashedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <Router navigationBarStyle={styles.navBar}
              titleStyle={styles.navBarTitle}
              barButtonTextStyle={styles.barButtonTextStyle}
            >
              <Scene key="root" headerTintColor="#FFFFFF">
                <Scene component={Test}/>

                <Scene
                  key="launchScene"
                  component={LaunchScene}
                  title="Home"
                  hideNavBar
                  initial={true}
                />

                <Scene
                  key="signUp"
                  component={SignUpContainer}
                  title="Sign Up"
                />

                <Scene
                  key="login"
                  component={LoginContainer}
                  title="Login"
                  navBarButtonImageColor={styles.leftButtonIconStyle}
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
                <Scene
                  key="history"
                  component={History}
                  title="Account History"
                  initial={false}
                />
                <Scene
                  key="myAccount"
                  component={MyAccount}
                  title="My Account"
                  initial={false}
                />
                <Scene
                  key="editMyAccount"
                  component={EditMyAccount}
                  title="Edit My Account"
                  initial={false}
                />

                <Scene
                  key="navScreen"
                  component={NavScreen}
                  />
         
                <Scene
                  key="createReviewForm"
                  component={CreateReview}
                  title="Add Review"
                />
                <Scene key="chatBrowser" component={ChatBrowser} />
                <Scene key="chat" component={ChatContainer} title="Chat" />
              </Scene>
            </Router>
          </Provider>
        </ApolloProvider>
      </View>
    );
  }
}
