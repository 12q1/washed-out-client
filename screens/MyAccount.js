// screens/MyAccount.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import t from "tcomb-form-native";
import Account, { formOptions} from "../models/MyAccount";
import { TouchableHighlight } from "react-native";
import styles from './MyAccount.styles';
import { ScrollView } from 'react-native-gesture-handler';
import ImagePick from '../components/ImagePick'

export default class MyAccount extends Component {

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {newAccount: null};
  }

  onSubmit() {
    const { form } = this.refs;
    const newAccount = form.getValue();
    if (!newAccount) return;
    console.log(newAccount);
    //this.props.dispatchAccount(newAccount);  TODO make an action on this
    //this.clearForm(); //probably Actions.somwhere instead
  }

  onChange(newAccount) {
    this.setState({ newAccount });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
        <ScrollView>
        <ImagePick/>
        <Form
          ref="form"
          type={Account}
          options={formOptions}
          value={this.state.newAccount}
          onChange={this.onChange}
        />
        </ScrollView>
        <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor="black"
          >
            <Text style={styles.buttonText}>Confirm Changes</Text>
          </TouchableHighlight>
      </View>
    );
  }
}