import React, { Component } from "react";
import { List, ListItem, SearchBar } from "react-native-elements";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";
import Message from "../components/Message";
import CreateMessageForm from "../components/CreateMessageForm";

const userTest = [
  {
    id: 1,
    fullName: "stefan wullems",
    picture: "null"
  },
  {
    id: 2,
    fullName: "someone",
    picture: "null"
  }
];

const comments = [
  {
    id: 1,
    userId: 1,
    content: "hello"
  },
  {
    id: 2,
    userId: 1,
    content: "how are you"
  },
  {
    id: 3,
    userId: 2,
    content: "i'm good"
  }
];

class FeedContainer extends Component {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView>
        {comments &&
          comments.map(comment => {
            console.log(
              "comment",
              comment,
              "userTest",
              userTest,
              "user",
              userTest[comment.userId]
            );
            return (
              <Message user={userTest[comment.userId - 1]} comment={comment} />
            );
          })}
        <CreateMessageForm />
      </SafeAreaView>
    );
  }
}

const mstp = ({ feed, user }) => ({ feed, user });

export default connect(mstp)(FeedContainer);
