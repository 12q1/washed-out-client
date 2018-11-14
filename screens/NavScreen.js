import React from "react";
import { Container, Header, Button, Body, Content,Text } from "native-base";
import { Actions } from 'react-native-router-flux';
import { Font, AppLoading } from "expo";


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
      return <AppLoading/>
    }

    return (
      <Container>
        <Header>
          <Text> Nav Screen </Text>
        </Header>
          <Content>
            <Body>
            <Button full rounded primary
            style={{ margin: 30 }}
            onPress= {()=>{Actions.myAccount()}}>
            <Text>MyProfile</Text>
          </Button>
          <Button full rounded primary
            style={{ margin: 30 }}
            onPress= {()=>{Actions.history()}}>
            <Text>History</Text>
          </Button>
          <Button full rounded primary
            style={{ margin: 30 }}
            onPress= {()=>{Actions.chat()}}>
            <Text>Chat</Text>
          </Button>
          <Button full rounded primary
            style={{ margin: 30 }}
            onPress= {()=>{Actions.launchScene()}}>
            <Text>Logout</Text>
          </Button>
            </Body>
        </Content>
      </Container>
    );
}
}
