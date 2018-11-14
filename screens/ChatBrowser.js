import React, { Component } from "react";
import { List, ListItem, SearchBar } from "react-native-elements";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import fetchChats from "../actions/chats/fetch-chats";
import { HeaderComponent } from "./HeaderComponent";
import "./HeaderComponent.styles";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

class FeedContainer extends Component {
  componentDidMount() {
    this.props.fetchChats(this.props.user.id);
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };
  renderHeader = () => {
    const picture = this.props.user ? this.props.user.picture : "";
    return <HeaderComponent picture={picture} />;
  };

  render() {
    return (
      <SafeAreaView>
        {this.props.chats && (
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <SearchBar placeholder="Type Here..." lightTheme round />
            <FlatList
              data={this.props.chats}
              renderItem={({ item }) => {
                return (
                  <ListItem
                    roundAvatar
                    key={item.id}
                    onPress={() =>
                      setTimeout(() => {
                        Actions.chat({ selectedUserId: item.id });
                      }, 200)
                    }
                    keyExtractor={item.id}
                    title={`${item.fullName}`}
                    avatar={{ uri: item.picture }}
                    containerStyle={{ borderBottomWidth: 0 }}
                  />
                );
              }}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
            />
          </List>
        )}
      </SafeAreaView>
    );
  }
}

const mstp = ({ chats, user }) => ({ chats, user });
const mdtp = { fetchChats };

export default connect(
  mstp,
  mdtp
)(FeedContainer);
