import React, { Component } from 'react';
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './MyAccount.styles';
import { connect } from "react-redux";

class MyAccount extends Component {
    componentDidMount() {
        this.props.fetchAccountDetails(this.props.selectedUserId);
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
            </View>
        )
    }
}

const mstp = ({ selectedUser }) => ({ selectedUser });
const mdtp = { fetchAccountDetails, clearAccountDetails };

export default connect(
    mstp,
    mdtp
)(MyAccount);