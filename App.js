// App.js

import React, { Component } from 'react';
import { View } from 'react-native';
// import SignUp from './screens/SignUp';
import styles from './App.styles';
import LaunchScene from './screens/LaunchScene';
// import store from './'store';

export default class WashedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LaunchScene />
      </View>
    );
  }
};