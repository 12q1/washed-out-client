// screens/SignInContainer.js

import React, { Component } from "react";
import { connect } from "react-redux";
import signIn from "../actions/users/sign-in";
import styles from "./SignUp.styles";
import t from "tcomb-form-native";
import User, { formOptions } from "../models/User";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";

class SignInContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { newUser: null };
  }

  // componentWillMount() {
  //   this.props.loadUser();
  // }

  // componentDidMount() {
  //   // focus on the "email" field
  //   this.refs.form.getComponent('email').refs.input.focus();
  // }

  // componentDidUpdate() {
  //   if (this.props.newUser && this.props.newUser._id) {
  //     try {
  //       console.log("Hello newUser")
  //     } catch(e) {
  //       console.log('wait...')
  //     }
  //   }
  // }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
    this.props.signIn(newUser);
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <Text style={styles.title}>Login for Washed Out</Text>
          <Form
            ref="form"
            type={User}
            options={formOptions}
            value={this.state.newUser}
            onChange={this.onChange}
          />

          <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor="black"
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mdtp = { signIn };

export default connect(
  null,
  mdtp
)(SignInContainer);
