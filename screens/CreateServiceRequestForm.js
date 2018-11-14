import React, { Component } from "react";
import { connect } from "react-redux";
import createServiceRequest from "../actions/service-requests/create-service-request";
import t from "tcomb-form-native";
import ServiceRequest, { formOptions } from "../models/ServiceRequest";
import { View } from "react-native";
import { ScrollView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

class CreateServiceRequestForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newServiceRequest: null
    };
  }

  componentDidUpdate() {
    if (this.props.serviceRequest) {
      Actions.chat({ selectedUserId: this.props.toId });
    }
  }

  onSubmit() {
    const serviceRequest = this.state.newServiceRequest;
    if (!serviceRequest) return;
    this.props.createServiceRequest(
      this.props.user.id,
      this.props.toId,
      serviceRequest
    );
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
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>ServiceRequest</Text>
          <Form
            ref="form"
            type={ServiceRequest}
            options={formOptions}
            value={this.state.newServiceRequest}
            onChange={this.onChange}
          />
        </ScrollView>
        <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mdtp = { createServiceRequest };
const mstp = ({ user, serviceRequest }) => ({ user, serviceRequest });

export default connect(
  mstp,
  mdtp
)(CreateServiceRequestForm);
