// App.js

import React, { Component } from 'react';
import { View } from 'react-native';
import SignUp from './screens/SignUp';
import styles from './App.styles';
import store from './store'

export default class ShatApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}