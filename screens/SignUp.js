import React from "react";
import { gql } from "apollo-boost";
import t from "tcomb-form-native";
import User, { formOptions } from "../models/User";
import styles from "./SignUp.styles";
import { Mutation } from "react-apollo";
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView
} from "react-native";

const SIGN_UP = gql`
  mutation SignUp($fullName: String!, $email: String!, $password: String!) {
    signUp(fullName: $fullName, email: $email, password: $password) {
      user {
        id
      }
    }
  }
`;

export default function SignUp(props) {
  const Form = t.form.Form;
  return (
    <Mutation mutation={SIGN_UP}>
      {(signUp, { data }) => (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text style={styles.title}>Sign up for Washed Out</Text>
            <Form
              ref="form"
              type={User}
              options={formOptions}
              value={props.newUser}
              onChange={props.onChange}
            />

            <TouchableHighlight
              style={styles.button}
              onPress={async e => {
                e.preventDefault();

                signUp({
                  variables: {
                    fullName: props.newUser.fullName,
                    email: props.newUser.email,
                    password: props.newUser.password
                  }
                })
                  .then(res => {
                    console.log(res);
                    props.clearForm();
                  })
                  .catch(console.error);

                console.log("hi");
              }}
              underlayColor="black"
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableHighlight>
          </KeyboardAvoidingView>
        </View>
      )}
    </Mutation>
  );
}
