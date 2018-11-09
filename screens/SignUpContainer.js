// screens/SignUp.js

import React, { Component } from "react";
import { connect } from "react-redux";
import signUp from "../actions/users/sign-up";
import SignUp from "./SignUp";

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { newUser: null };
  }

  // componentDidMount() {
  //   // focus on the "name" field
  //   this.refs.form.getComponent("name").refs.input.focus();
  // }

  onSubmit() {}

  clearForm() {
    this.setState({ newUser: null });
  }

  onChange(newUser) {
    this.setState({ newUser });
  }

  render() {
    return (
      <SignUp
        newUser={this.state.newUser}
        onChange={this.onChange.bind(this)}
        handleSubmit={this.onSubmit.bind(this)}
        clearForm={this.clearForm.bind(this)}
      />
    );
  }
}

const mdtp = { signUp };

export default connect(
  null,
  mdtp
)(SignUpContainer);
