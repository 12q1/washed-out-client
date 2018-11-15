import React, { Component } from "react";
import { connect } from "react-redux";
//
import updateServiceFees from "../actions/users/update-service-fees";
//
import t from "tcomb-form-native";
import ServiceFees, { formOptions } from "../models/ServiceFees";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import styles from "../screens/SignUp.styles";

class TestUpdateServiceFees extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newServiceFees: {
        washing: 10,
        drying: 0,
        ironing: 1,
        folding: 0.2,
        pickup: 5,
        delivery: 5,
        base: 0
      }
    };
  }

  onSubmit() {
    const serviceFees = this.state.newServiceFees;
    if (!serviceFees) return;
    this.props.updateServiceFees(this.props.user.serviceFees.id, serviceFees);
  }

  onChange(newServiceFees) {
    this.setState({ newServiceFees });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.title}>Test: updateServiceFees query</Text>
          <Form
            ref="form"
            type={ServiceFees}
            options={formOptions}
            value={this.state.newServiceFees}
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

const mdtp = { updateServiceFees };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(TestUpdateServiceFees);
