import React, { Component } from "react";
import { connect } from "react-redux";
import createComment from "../actions/comments/create-comment";
import t from "tcomb-form-native";
import Comment, { formOptions } from "../models/Comment";
import { View } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { Text } from "react-native";
import { TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import { Rating } from "react-native-elements";

const styles = {
  container: {
    flex:1,
    padding: 20,
    backgroundColor:"#0086cb",
  },
  title: {
    fontSize: 18,
    textAlign: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#004466",
    borderWidth: 0,
    margin: 15,
    width: "80%",
    borderColor: '#0086cb',
    borderRadius: 100,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center",
    color:"#ffffff"
  },
  rating:{
    color:"#ffffff",
    alignSelf:"center"
  }
};

const STAR_IMAGE=require('../assets/star3.png')
class CreateReview extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.ratingCompleted = this.ratingCompleted.bind(this);

    this.state = {
      newComment: {
        content: "Add your review here"
      },
      rating: 3
    };
  }

  ratingCompleted(rating) {
    this.setState({ rating });
  }

  onSubmit() {
    const comment = this.state.newComment;
    if (!comment) return;
    this.props.createComment(this.props.user.id, this.props.toId, {
      content: comment.content,
      rating: this.state.rating
    });
    this.clearForm()
    Actions.feed()
  }

  clearForm() {
    this.setState({
      newComment: null
    });
  }

  onChange(newComment) {
    this.setState({ newComment });
  }

  render() {
    const Form = t.form.Form;
    const rating = this.state.rating;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <Form
            ref="form"
            type={Comment}
            options={formOptions}
            value={this.state.newComment}
            onChange={this.onChange}
            style={styles.form}
          />
          <Rating
            style={styles.rating}
            showRating
            type='custom'
            ratingImage={STAR_IMAGE}
            ratingColor='#ffffff'
            ratingBackgroundColor='#0086cb'
            imageSize={30}
            startingValue={rating}
            onFinishRating={this.ratingCompleted}
          />
          <TouchableHighlight onPress={this.onSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mdtp = { createComment };
const mstp = ({ user }) => ({ user });

export default connect(
  mstp,
  mdtp
)(CreateReview);
