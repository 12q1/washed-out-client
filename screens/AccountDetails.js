import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { Card, Rating, Avatar, Text, Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import fetchAccountDetails from "../actions/users/fetch-account-details";
import clearAccountDetails from "../actions/users/clear-account-details";
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

  getComments = () => {
    return this.props.selectedUser.comments;
  };

  componentWillUnmount() {
    this.props.clearAccountDetails();
  }

  render() {
    const services = !!this.props.selectedUser ? this.filterServices() : null;
    const comments = !!this.props.selectedUser ? this.getComments() : null;
    const selectedUser = this.props.selectedUser || false;

    return (
      <ScrollView>
        {selectedUser && (
          <View>
            <Card>
              <View style={{ flexDirection: "row" }}>
                <Avatar
                  containerStyle={{marginTop:30}}
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

                  <Button backgroundColor= "#42b6f4"
                    color="white"
                    title="Add Review"
                    onPress={() => {
                      Actions.createReviewForm({ toId: selectedUser.id })
                    }}
                  />
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
            {!!comments.length && (
              <Card>
                <Text style={{ textAlign: "center" }}> Comments</Text>
                {comments.map(comment => {
                  return (
                    <Card
                      style={{ justifyContent: "center" }}
                      key={comment.id}
                      title={comment.fullName}
                    >
                      <Text style={{ textAlign: "center" }}>
                        {" "}
                        {comment.from.fullName}
                      </Text>
                      <Rating
                        style={{ alignSelf: "center" }}
                        imageSize={20}
                        readonly
                        startingValue={comment.rating}
                      />
                      <Text style={{ textAlign: "center" }}>
                        {" "}
                        {comment.content}{" "}
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
                  Actions.createServiceRequestForm({
                    toId: selectedUser.id,
                    services: selectedUser.services,
                    serviceFees: selectedUser.serviceFees
                  })
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
