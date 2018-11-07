// App.js

import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './App.styles';
import LaunchScene from './screens/LaunchScene';

export default class WashedOut extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LaunchScene />
      </View>
    );
  }
};