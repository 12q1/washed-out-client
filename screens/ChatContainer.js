import React, { Component } from "react";
import fetchMessages from "../actions/messages/fetch-messages";
import { View, SafeAreaView } from "react-native";
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

class ChatContainer extends Component {
  componentDidMount() {
    this.props.fetchMessages(this.props.user.id, this.props.selectedUserId);
  }

  render() {
    return (
      <SafeAreaView>
        {this.props.messages &&
          this.props.messages.map(message => {
            return <Message user={message.from} message={message} />;
          })}
        <CreateMessageForm />
      </SafeAreaView>
    );
  }
}

const mstp = ({ user, messages, selectedUser }) => ({
  user,
  messages,
  selectedUser
});
const mdtp = { fetchMessages };

export default connect(
  mstp,
  mdtp
)(ChatContainer);
