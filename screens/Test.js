import React, { Component } from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import TestAddUser from "../components/TestAddUser";
import TestSetLocation from "../components/TestSetLocation";

export default class Test extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <TestAddUser />
          <TestSetLocation />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
