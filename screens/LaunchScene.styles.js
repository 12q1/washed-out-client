// screens/LaunchScene.js

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#004466",
    flex: 1
  },

  bgWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },

  btn: {
    backgroundColor: "#0086cb",
    alignSelf: "center",
    borderWidth: 0,
    margin: 15,
    width: 300
  },

  img: {
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: "30%",
    marginBottom: 30,
    width: "80%",
  },

  img2: {
    alignSelf: "center",
    width: 180,
    marginBottom: 40
  }
});
