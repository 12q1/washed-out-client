// screens/MyAccount.js
import React, { Component } from 'react';
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
import { View, Text, TouchableHighlight } from 'react-native';
import { Avatar, List, ListItem, Rating, Divider } from 'react-native-elements';
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
                        containerStyle={{ flex: 1, alignSelf: 'center' }}
                        large
                        rounded
                        source={{ uri: selectedUser.picture }}
                    />
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}> Name: {selectedUser.fullName} </Text>
                    <Text style={{ color: 'white', alignSelf: 'center' }}> Status: {selectedUser.status} </Text>
                    <Text style={{ color: 'white', alignSelf: 'center' }}> Location:</Text>
                    <Text style={{ color: 'white', alignSelf: 'center' }}> Rating:</Text>
                    <Rating
                        imageSize={20}
                        readonly
                        startingValue={selectedUser.rating}
                        style={{ backgroundColor: "#004466", alignSelf: 'center' }}
                    />

                    <Text style={{ color: 'white', alignSelf: 'center' }}> Services I can provide:</Text>
                    <List containerStyle={{
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        backgroundColor: "#004466"
                    }}>
                        {!!services && (services.map((x, i) => {
                            return <ListItem titleStyle={{ color: "white" }}
                                key={i} hideChevron title={x}
                                subtitle={`starting from ${selectedUser.serviceFees[x]}€`} />
                        }))}
                    </List>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.addInfoForm}
                        underlayColor="black"
                    >
                        <Text style={styles.buttonText}>Edit Your Personal Details</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.addLocationForm}
                        underlayColor="black"
                    >
                        <Text style={styles.buttonText}>Edit Your Location Details</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.addServicesForm}
                        underlayColor="black"
                    >
                        <Text style={styles.buttonText}>Edit Your Service Details</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={Actions.addServiceFeesForm}
                        underlayColor="black"
                    >
                        <Text style={styles.buttonText}>Edit Your Service Fees</Text>
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