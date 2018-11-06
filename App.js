// App.js

import React, { Component } from 'react';
import { View } from 'react-native';
import { ApolloClient, Http} from 'apollo-client-preset'
import SignUp from './screens/SignUp';
import styles from './App.styles';

export default class ShatApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SignUp />
      </View>
    );
  }
}