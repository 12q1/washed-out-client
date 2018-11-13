import React from 'react';
import { Header, Left, Body, Right, Button, Text} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponent.styles";
import { Platform, StatusBar } from 'react-native';
import { ThankYou } from './ThankYou';



const HeaderComponent =  ({logo, navigation})=>{


	return (
		<Header style={{paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight+20,
		 								padding:30,
										alignText:"center", 
		 								backgroundColor:"#42b6f4"}} iosBarStyle="light-content">
			<Left>
				<Button transparent>
					<Icon name="bars" style={styles.icon}/>
				</Button>
			</Left>
			<Body>{logo &&
					<Image resizeMode="contain" style={styles.logo} source={logo}/> ||
					<Text id="headerTitle" style={styles.headerText} >Header Placeholder</Text>
				}
			</Body>

			<Right>
				<Button transparent>
					<Icon name="sign-out" style={styles.icon} onPress={() => navigation.navigate("ThankYou")}/>
				</Button>
			</Right>
		</Header>
	);
}

export default HeaderComponent;