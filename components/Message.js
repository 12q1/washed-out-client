import React from "react";
import { View, Text } from "react-native";

export default function(props) {
  return (
    <View>
      {props.message.status === "sent" && (
        <Text>
          {props.user.fullName}: {props.message.content}
        </Text>
      )}
      {props.message.status === "recieved" && (
        <Text style={{ textAlign: "right" }}>
          {props.message.content}: {props.user.fullName}
        </Text>
      )}
    </View>
  );
}
