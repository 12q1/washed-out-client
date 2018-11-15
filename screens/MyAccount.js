// screens/MyAccount.js
import React, { Component } from 'react';
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar, List, ListItem, Rating } from 'react-native-elements';
import styles from './MyAccount.styles';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import fetchFeed from "../actions/users/fetch-feed";
import { ScrollView, FlatList } from 'react-native';

class MyAccount extends Component {
    componentDidMount() {
        //console.log(this.props.user.id);
        this.props.fetchAccountDetails(this.props.user.id);
    }

    componentWillUnmount() {
        this.props.clearAccountDetails();
    }

    filterServices() {
        return Object.keys(this.props.selectedUser.services).filter(
            key =>
                this.props.selectedUser.services[key] &&
                key !== "__typename" &&
                key !== "id"
        );
    }

    render() {
        const services = !!this.props.selectedUser ? this.filterServices() : null;
        const selectedUser = this.props.selectedUser || false;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Avatar
                        style={{ justifyContent: "flex-start" }}
                        large
                        rounded
                        source={{ uri: selectedUser.picture }}
                    />
                    <Text> Name: {selectedUser.fullName} </Text>
                    <Text> Status: {selectedUser.status} </Text>
                    <Text> Location:</Text>
                    <Text> Rating:</Text>
                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={selectedUser.rating}
                    />
                    <Text> Services I can provide:</Text>
                    <List>
                        {!!services && (services.map((x, i) => { return <ListItem key={i} hideChevron title={x} subtitle={`starting from ${selectedUser.serviceFees[x]}€`} /> }))}
                    </List>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.editMyAccount}
                        underlayColor="black"
                    >
                        <Text style={styles.buttonText}>Edit Your Details</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        )
    }
}

const mstp = ({ user, selectedUser }) => ({ user, selectedUser });
const mdtp = { fetchAccountDetails, clearAccountDetails, fetchFeed };

export default connect(
    mstp,
    mdtp
)(MyAccount);