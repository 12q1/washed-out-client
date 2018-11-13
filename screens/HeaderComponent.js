import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponent.styles";

export const HeaderComponent = ({ logo, navigation }) => {
  return (
    <Header style={{ backgroundColor: "#42b6f4" }} iosBarStyle="light-content">
      <Left>
        <Button transparent>
          <Icon name="bars" style={styles.icon} />
        </Button>
      </Left>
      <Body>
        {(logo && (
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        )) || <Text style={styles.headerText}>nearby...</Text>}
      </Body>

      <Right>
        <Button transparent>
          <Icon
            name="sign-out"
            style={styles.icon}
            onPress={() => navigation.navigate("ThankYou")}
          />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComponent;
