import React from "react";
import { View, Button } from "react-native";
 
import { showMessage } from "react-native-flash-message";
 
export default class ThankYou extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          onPress={() => {
            /* HERE WE GONE SHOW OUR FIRST MESSAGE */
            showMessage({
              message: "Hello World",
              description: "This is our second message",
             type: "success",

            });
          }}
          title="Request Details"
          color="#841584"
        />
      </View>
    );
  }
}