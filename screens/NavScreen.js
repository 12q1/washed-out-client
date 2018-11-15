import React from "react";
import { Container, Header, Button, Body, Content, Text } from "native-base";
import { Actions } from "react-native-router-flux";
import { Font, AppLoading } from "expo";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    margin: 30,
    backgroundColor: "#0086cb",
    width: "80%"
  },
  buttonText: {
    fontSize: 18,
    alignSelf: "center"
  }
});

export default class NavScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }

    return (
      <Container style={{ backgroundColor: "#004466" }}>
        <Content>
          <Body>
            <Button
              style={styles.button}
              full
              rounded
              primary
              onPress={() => {
                Actions.myAccount();
              }}
            >
              <Text style={styles.buttonText}>MyProfile</Text>
            </Button>
            <Button
              style={styles.button}
              full
              rounded
              primary
              style={styles.button}
              onPress={() => {
                Actions.feed();
              }}
            >
              <Text style={styles.buttonText}>Feed</Text>
            </Button>
            <Button
              style={styles.button}
              full
              rounded
              primary
              style={styles.button}
              onPress={() => {
                Actions.history();
              }}
            >
              <Text style={styles.buttonText}>History</Text>
            </Button>
            <Button
              style={styles.button}
              full
              rounded
              primary
              style={styles.button}
              onPress={() => {
                Actions.chat();
              }}
            >
              <Text style={styles.buttonText}>Chat</Text>
            </Button>
            <Button
              style={styles.button}
              full
              rounded
              primary
              style={styles.button}
              onPress={() => {
                Actions.launchScene();
              }}
            >
              <Text style={styles.buttonText}>Logout</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}
