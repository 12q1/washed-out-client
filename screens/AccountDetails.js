import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Card, Rating, Avatar, Text, Button } from "react-native-elements";
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";

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
    return (
      <View>
        {!!this.props.selectedUser && (
          <View>
            <Card>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  style={{ justifyContent: "flex-start" }}
                  large
                  rounded
                  source={{ uri: this.props.selectedUser.picture }}
                />
                <Card
                  style={{
                    justifyContent: "flex-end",
                    alignItem: "stretch"
                  }}
                >
                  <Text> Name: {this.props.selectedUser.fullName} </Text>
                  <Text> Rating: </Text>
                  <Rating
                    imageSize={20}
                    readonly
                    startingValue={this.props.selectedUser.rating}
                  />
                  <Text> Status: {this.props.selectedUser.status} </Text>
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
                        {"€" + this.props.selectedUser.serviceFees[key]}
                      </Text>
                    </Card>
                  );
                })}
              </Card>
            )}
            <Card>
              <Button backgroundColor="#1E90FF" clear title="Contact" />
            </Card>
          </View>
        )}
      </View>
    );
  }
}

const mstp = ({ selectedUser }) => ({ selectedUser });
const mdtp = { fetchAccountDetails, clearAccountDetails };

export default connect(
  mstp,
  mdtp
)(AccountDetails);
