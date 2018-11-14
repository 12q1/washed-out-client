import React from "react";
import { View, Text } from "react-native";

export default function(props) {
  console.log("props", props);
  return (
    <View>
      <Text>
        {props.user.fullName}: {props.comment.content}
      </Text>
    </View>
  );
}
