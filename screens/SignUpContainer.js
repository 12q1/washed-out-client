// screens/SignUp.js

import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/users/sign-up";
import t from "tcomb-form-native";
import User, { formOptions } from "../models/User";
import styles from "./SignUp.styles";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.clearForm = this.clearForm.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = { newUser: null };
  }

  // componentDidMount() {
  //   // focus on the "name" field
  //   this.refs.form.getComponent("name").refs.input.focus();
  // }

  onSubmit() {
    const { form } = this.refs;
    const newUser = form.getValue();
    if (!newUser) return;
    console.log(newUser);
    this.props.signUp(newUser);
    this.clearForm();
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
          <Text style={styles.title}>Sign up for Washed Out</Text>
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
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mdtp = { signUp };

export default connect(
  null,
  mdtp
)(SignUpContainer);
