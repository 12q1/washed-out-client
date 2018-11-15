import React from "react";
import { Text, Image, Picker } from "react-native";
import { Header, Left, Body, Right, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponent.styles";
import { Avatar } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export const HeaderComponent = ({ logo, picture }) => {


  return (
    <Header style={{ backgroundColor: "#0086cb" }} iosBarStyle="light-content">
      <Left>
        <Button transparent>
          <Icon name="bars" style={styles.icon} onPress={() => { Actions.navScreen() }} />
        </Button>
      </Left>
      <Body>
        {(logo && (
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        )) || <Text style={styles.headerText}>Home</Text>}
      </Body>

      <Right>
        <Button transparent>
          <Avatar rounded source={{ uri: picture }} />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComponent;
