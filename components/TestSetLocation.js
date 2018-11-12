import React, { Component } from "react";
import { connect } from "react-redux";
import setLocation from "../actions/users/set-location";
import t from "tcomb-form-native";
import Location, { formOptions } from "../models/Location";
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

class TestSetLocation extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      newLocation: {
        country: "the netherlands",
        city: "velsen",
        postalCode: "2071CR",
        street: "rijksweg",
        houseNumber: "342"
      }
    };
  }

  onSubmit() {
    const location = this.state.newLocation;
    if (!location) return;
    this.props.setLocation(this.props.user.id, location);
    this.clearForm();
  }

  clearForm() {
    this.setState({
      newLocation: null
    });
  }

  onChange(newLocation) {
    this.setState({ newLocation });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView behavior="padding">
          <Text style={styles.title}>Test: setLocation query</Text>
          <Form
            ref="form"
            type={Location}
            options={formOptions}
            value={this.state.newLocation}
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

const mdtp = { setLocation };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(TestSetLocation);
