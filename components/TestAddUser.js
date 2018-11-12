import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/users/sign-up";
import t from "tcomb-form-native";
import User, { formOptions } from "../models/User";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";

const styles = {
  view: {
    padding: 20
  },
  title: {
    fontSize: 18,
    textAlign: "center"
  },
  button: {
    height: 36,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center"
  }
};

class TestAddUser extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newUser: {
        name: "Stefan Wullems",
        email: "",
        password: "test"
      }
    };
  }

  onSubmit() {
    const user = this.state.newUser;
    if (!user) return;
    this.props.signUp(user);
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
      <View style={styles.view}>
        <Text style={styles.title}>Test: signUp query</Text>
        <Form
          ref="form"
          type={User}
          options={formOptions}
          value={this.state.newUser}
          onChange={this.onChange}
        />

        <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mdtp = { signUp };

export default connect(
  null,
  mdtp
)(TestAddUser);
