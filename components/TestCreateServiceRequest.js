import React, { Component } from "react";
import { connect } from "react-redux";
import createServiceRequest from "../actions/service-requests/create-service-request";
import t from "tcomb-form-native";
import ServiceRequest, { formOptions } from "../models/ServiceRequest";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
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

class TestCreateServiceRequest extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newServiceRequest: {
        items: [
          { itemType: "pants", count: 1 },
          { itemType: "shirt", count: 2 }
        ],
        specifications: "I'm sexy and I know it",
        services: {
          washing: true,
          drying: true,
          ironing: true,
          folding: false,
          pickup: false,
          delivery: false
        },
        additionalCharge: 5.4
      }
    };
  }

  onSubmit() {
    const serviceRequest = this.state.newServiceRequest;
    if (!serviceRequest) return;
    this.props.createServiceRequest(this.props.user.id, 1, serviceRequest);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      newServiceRequest: null
    });
  }

  onChange(newServiceRequest) {
    this.setState({ newServiceRequest });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.title}>Test: createServiceRequest query</Text>
          <Form
            ref="form"
            type={ServiceRequest}
            options={formOptions}
            value={this.state.newServiceRequest}
            onChange={this.onChange}
          />

          <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mdtp = { createServiceRequest };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(TestCreateServiceRequest);
