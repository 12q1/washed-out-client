// screens/Feed.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import t from "tcomb-form-native";
import Order, { formOptions} from "../models/Order";
import { TouchableHighlight } from "react-native";

import styles from './OrderForm.styles';

export default class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {newOrder: null};
  }

  onSubmit() {
    const { form } = this.refs;
    const newOrder = form.getValue();
    if (!newOrder) return;
    console.log(newOrder);
    //this.props.dispatchOrder(newOrder);  TODO make an action on this
    //this.clearForm(); //probably Actions.somwhere instead
  }

  onChange(newOrder) {
    this.setState({ newOrder });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={Order}
          options={formOptions}
          value={this.state.newOrder}
          onChange={this.onChange}
        />
        <TouchableHighlight
            style={styles.button}
            onPress={this.onSubmit}
            underlayColor="black"
          >
            <Text style={styles.buttonText}>Order!</Text>
          </TouchableHighlight>
      </View>
    );
  }
}