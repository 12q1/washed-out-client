// screens/SignUpContainer.js

import React, { Component } from "react";
import { connect } from "react-redux";
import login from "../actions/users/sign-in";
import t from "tcomb-form-native";
import { formOptions, UserSignIn } from "../models/User";
import styles from "./SignUp.styles";
import { View, AsyncStorage } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = { newUser: null };
  }

  onSubmit() {
    const user = this.state.newUser;
    if (!user.email || !user.password) return;
    this.props.login(user);
    this.clearForm();
  }

  componentDidUpdate() {
    if (this.props.user && this.props.user.token) {
      AsyncStorage.setItem("token", this.props.user.token);
      Actions.feed();
    }
  }

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  render() {
    const Form = t.form.Form;

    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.title}>Login</Text>
          <Form
            ref="form"
            type={UserSignIn}
            options={formOptions}
            value={this.state.newUser}
            onChange={this.onChange}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor="black"
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mstp = ({ user }) => ({ user });
const mdtp = { login };

export default connect(
  mstp,
  mdtp
)(LoginContainer);
