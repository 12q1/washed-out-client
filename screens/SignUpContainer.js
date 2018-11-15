// screens/SignUpContainer.js

import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/users/sign-up";
import t from "tcomb-form-native";
import { UserSignUp, formOptions } from "../models/User";
import styles from "./SignUp.styles";
import { View, AsyncStorage } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.clearForm = this.clearForm.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { newUser: null };
  }

  onSubmit() {
    const user = this.state.newUser;
    if (!user.name || !user.password || !user.email) return;
    console.log(user);
    this.props.signUp(user);
    this.clearForm();
  }

  componentDidUpdate() {
    if (this.props.user) {
      Actions.addInfoForm();
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
          <Text style={styles.title}>Sign Up</Text>
          <Form
            ref="form"
            type={UserSignUp}
            options={formOptions}
            value={this.state.newUser}
            onChange={this.onChange}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor="black"
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mstp = ({ user }) => ({ user });
const mdtp = { signUp };

export default connect(
  mstp,
  mdtp
)(SignUpContainer);
