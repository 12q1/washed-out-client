import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Card, Rating, Avatar, Text, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
import { Action } from "rxjs/internal/scheduler/Action";
import { Actions } from "react-native-router-flux";

class AccountDetails extends Component {
  componentDidMount() {
    this.props.fetchAccountDetails(this.props.selectedUserId);
  }

  filterServices() {
    return Object.keys(this.props.selectedUser.services).filter(
      key =>
        this.props.selectedUser.services[key] &&
        key !== "__typename" &&
        key !== "id"
    );
  }

  componentWillUnmount() {
    this.props.clearAccountDetails();
  }

  render() {
    const services = !!this.props.selectedUser ? this.filterServices() : null;
    const selectedUser = this.props.selectedUser || false;
    return (

       <ScrollView>
        {selectedUser && (

          <View>
            <Card>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  style={{ justifyContent: "flex-start" }}
                  large
                  rounded
                  source={{ uri: selectedUser.picture }}
                />
                <Card
                  style={{
                    justifyContent: "flex-end",
                    alignItem: "stretch"
                  }}
                >
                  <Text> Name: {selectedUser.fullName} </Text>
                  <Text> Rating: </Text>
                  <Rating
                    imageSize={20}
                    readonly
                    startingValue={selectedUser.rating}
                  />
                  <Text> Status: {selectedUser.status} </Text>
                </Card>
              </View>
            </Card>
            {!!services.length && (
              <Card>
                <Text style={{ textAlign: "center" }}> Services </Text>
                {services.map((key, i) => {
                  return (
                    <Card key={i} title={key}>
                      <Text style={{ textAlign: "center" }}>
                        {"€" + selectedUser.serviceFees[key]}
                      </Text>
                    </Card>
                  );
                })}
              </Card>
            )}
            <Card>
              <Button
                backgroundColor="#1E90FF"
                clear
                title="Send Request"
                onPress={() =>
                  Actions.createServiceRequestForm({ toId: selectedUser.id })
                }
              />
            </Card>
          </View>
        )}
      </ScrollView>
    );
  }
}

const mstp = ({ selectedUser }) => ({ selectedUser });
const mdtp = { fetchAccountDetails, clearAccountDetails };

export default connect(
  mstp,
  mdtp
)(AccountDetails);
