import React, { Component } from "react";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import TestAddUser from "../components/TestAddUser";
import TestSetLocation from "../components/TestSetLocation";
import TestUpdateServices from "../components/TestUpdateServices";
import TestCreateServiceRequest from "../components/TestCreateServiceRequest";
import TestUpdateServiceFees from "../components/TestUpdateServiceFees";

export default class Test extends Component {
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <TestAddUser />
          <TestSetLocation />
          <TestUpdateServices />
          <TestCreateServiceRequest />
          <TestUpdateServiceFees />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
