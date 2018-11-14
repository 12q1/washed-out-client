// screens/MyAccount.js
import React, { Component } from 'react';
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './MyAccount.styles';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import fetchFeed from "../actions/users/fetch-feed";

class MyAccount extends Component {
    componentDidMount() {
        console.log(this.props.user.id);
        this.props.fetchAccountDetails(this.props.user.id);
    }

    componentWillUnmount() {
        this.props.clearAccountDetails();
    }


    render() {
        const selectedUser = this.props.selectedUser || false;
        console.log(selectedUser)
        return (
            <View style={styles.container}>
                <Avatar
                    style={{ justifyContent: "flex-start" }}
                    large
                    rounded
                    source={{ uri: selectedUser.picture }}
                />
                <Text> Name: {selectedUser.fullName} </Text>
                <Text> Status: {selectedUser.status} </Text>
                <TouchableHighlight
                    style={styles.button}
                    onPress={Actions.feed}
                    underlayColor="black"
                >
                    <Text style={styles.buttonText}>Edit Your Details</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mstp = ({ user, selectedUser }) => ({ user, selectedUser });
const mdtp = { fetchAccountDetails, clearAccountDetails, fetchFeed };

export default connect(
    mstp,
    mdtp
)(MyAccount);