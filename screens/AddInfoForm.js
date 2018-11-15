// screens/MyAccount.js

import React, { Component } from "react";
import { View, Text } from "react-native";
import t from "tcomb-form-native";
import UserInfo, { formOptions } from "../models/UserInfo";
import { TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ImagePick from "../components/ImagePick";
import updateProfile from "../actions/users/update-user-info";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import { StyleSheet } from "react-native";
import styles from "./SignUp.styles";

class AddInfoForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { newInfo: null };
  }

  onSubmit() {
    const info = this.state.newInfo;
    if (!info) return;
    console.log(info);
    this.props.updateProfile(this.props.user.id, info);
  }

  componentDidUpdate() {
    if (this.props.user && this.props.user.fullName) {
      Actions.addLocationForm();
    }
  }

  onChange(newInfo) {
    this.setState({ newInfo });
  }

  setImage(image) {
    this.setState({
      newInfo: this.state.newInfo ? { ...this.state.newInfo, image } : { image }
    });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Info</Text>
          <ImagePick setImage={this.setImage.bind(this)} />
          <Form
            ref="form"
            type={UserInfo}
            options={formOptions}
            value={this.state.newInfo}
            onChange={this.onChange}
          />
        </ScrollView>
        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmit}
          underlayColor="black"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const mstp = ({ user }) => ({ user });
const mdtp = { updateProfile };

export default connect(
  mstp,
  mdtp
)(AddInfoForm);
