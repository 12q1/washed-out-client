'use strict'

import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, View, StyleSheet, Image } from 'react-native';
import Button from 'apsl-react-native-button';
import styles from './LaunchScene.styles';

// import LoginScene from './LoginScene';
// import SignUp from './SignUp';

export default class LaunchScene extends Component {
  constructor(props) {
    super(props);
    const {navigator} = this.props;
  }

  toNext(data) {
    const {navigator} = this.props;
    if (navigator) {
      navigator.push(data);
    }
  }

  onLoginClick() {
    this.toNext({
      name: 'Login',
      title: 'Login',
      component: Login,
      passProps: {
        leftBtn: 'Back'
      }
    });
  }

  onSignupClick() {
    this.toNext({
      name: 'SignUp',
      title: 'Sign Up',
      leftBtn: 'Back',
      component: SignUp,
      passProps: {
        leftBtn: 'Back'
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgWrapper}>
          <Image source={require('../Img/bg.png')} style={styles.bg} />
        </View>

        <Image source={require('../Img/logo.png')} style={styles.img}/>

        <Button style={styles.btn}
                textStyle={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                onPress={this.onLoginClick.bind(this)}>
          Login
        </Button>
        <Button style={styles.btn}
                textStyle={{fontSize: 18, color: 'white', fontWeight: 'bold'}}
                onPress={this.onSignupClick.bind(this)}>
          Sign up
        </Button>

      </View>
    );
  }
}

