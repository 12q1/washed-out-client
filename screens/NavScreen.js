import React from "react";
import { Container, Header, Button, Body, Content,Text } from "native-base";
import { Actions } from 'react-native-router-flux';


export default class NavScreen extends React.Component {
  render() {
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
