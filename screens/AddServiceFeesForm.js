import React, { Component } from "react";
import { connect } from "react-redux";
import updateServiceFees from "../actions/users/update-service-fees";
import t from "tcomb-form-native";
import getServiceFeesModel from "../models/ServiceFees";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import styles from "../screens/SignUp.styles";

class AddServiceFeesForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    const { ServiceFees, formOptions } = getServiceFeesModel(
      this.props.user.services
    );
    console.log(ServiceFees, formOptions);
    this.ServiceFees = ServiceFees;
    this.formOptions = formOptions;
    this.state = {
      newServiceFees: {}
    };
  }

  componentDidUpdate() {
    console.log(this.props.user);
    if (this.props.user.serviceFees && this.props.user.serviceFees.set) {
      Actions.feed();
    }
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
    const ServiceFees = this.ServiceFees;
    const formOptions = this.formOptions;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Services</Text>
          <Text>
            What do you want to minimally charge for the services you provide
          </Text>
          {ServiceFees && formOptions && (
            <Form
              ref="form"
              type={ServiceFees}
              options={formOptions}
              value={this.state.newServiceFees}
              onChange={this.onChange}
            />
          )}
        </ScrollView>
        <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mdtp = { updateServiceFees };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(AddServiceFeesForm);
