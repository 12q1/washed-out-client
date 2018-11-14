import React, { Component } from "react";
import { connect } from "react-redux";
import sendMessage from "../actions/messages/send-message";
import t from "tcomb-form-native";
import Message, { formOptions } from "../models/Message";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Rating } from "react-native-elements";

const styles = {
  view: {
    padding: 20
  },
  title: {
    fontSize: 18,
    textAlign: "center"
  },
  button: {
    height: 36,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center"
  }
};

class CreateMessageForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ratingCompleted = this.ratingCompleted.bind(this);

    this.state = {
      newMessage: {
        content: "hello this is a comment"
      }
    };
  }

  ratingCompleted(rating) {
    this.setState({ rating });
  }

  onSubmit() {
    const comment = this.state.newMessage;
    if (!comment) return;
    this.props.sendMessage(this.props.user.id, this.props.selectedUserId, {
      content: comment.content,
      rating: this.state.rating
    });
    this.clearForm();
  }

  clearForm() {
    this.setState({
      newMessage: null
    });
  }

  onChange(newMessage) {
    this.setState({ newMessage });
  }

  render() {
    const Form = t.form.Form;
    return (
      <View style={styles.view}>
        <KeyboardAvoidingView behavior="padding">
          <Form
            ref="form"
            type={Message}
            options={formOptions}
            value={this.state.newMessage}
            onChange={this.onChange}
          />

          <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mdtp = { sendMessage };
const mstp = ({ user }) => ({
  user
});

export default connect(
  mstp,
  mdtp
)(CreateMessageForm);
