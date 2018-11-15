import React, { Component } from "react";
import { connect } from "react-redux";
import updateServices from "../actions/users/update-services";
import t from "tcomb-form-native";
import Services, { formOptions } from "../models/Services";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import styles from "../screens/SignUp.styles";

class TestUpdateServices extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newServices: {
        washing: true,
        drying: true,
        ironing: true,
        folding: false,
        pickup: false,
        delivery: false
      }
    };
  }

  onSubmit() {
    const services = this.state.newServices;
    if (!services) return;
    this.props.updateServices(this.props.user.services.id, services);
  }

  onChange(newServices) {
    this.setState({ newServices });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.title}>Test: updateServices query</Text>
          <Form
            ref="form"
            type={Services}
            options={formOptions}
            value={this.state.newServices}
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

const mdtp = { updateServices };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(TestUpdateServices);
