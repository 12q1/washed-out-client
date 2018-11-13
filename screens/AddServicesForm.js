import React, { Component } from "react";
import { connect } from "react-redux";
import updateServices from "../actions/users/update-services";
import t from "tcomb-form-native";
import Services, { formOptions } from "../models/Services";
import { View } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";

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

class AddServicesForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newServices: {
        washing: false,
        drying: false,
        ironing: false,
        folding: false,
        pickup: false,
        delivery: false
      }
    };
  }

  componentDidUpdate() {
    if (this.props.user && this.props.user.services.set) {
      const services = this.props.user.services;
      if (
        services.washing ||
        services.drying ||
        services.ironing ||
        services.folding ||
        services.delivery ||
        services.pickup
      ) {
        Actions.addServiceFeesForm();
      } else {
        Actions.feed();
      }
    }
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
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Services</Text>
          <Text>
            Which services would you be willing to provide for other users
            (Select none if you only want to make use of services provided by
            others)
          </Text>
          <Form
            ref="form"
            type={Services}
            options={formOptions}
            value={this.state.newServices}
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

const mdtp = { updateServices };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(AddServicesForm);
