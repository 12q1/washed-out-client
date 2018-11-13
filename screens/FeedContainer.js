import React, { Component } from "react";
import { List, ListItem, SearchBar } from "react-native-elements";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import fetchFeed from "../actions/users/fetch-feed";
import { HeaderComponent } from "./HeaderComponent";
import "./HeaderComponent.styles";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

class FeedContainer extends Component {
  componentDidMount() {
    this.props.fetchFeed(1);
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
    return <HeaderComponent />;
  };

  renderFooter = () => {
    if (this.props.feed) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        {this.props.feed && (
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <SearchBar placeholder="Type Here..." lightTheme round />
            <FlatList
              data={this.props.feed}
              renderItem={({ item }) => {
                return (
                  <ListItem
                    roundAvatar
                    key={item.id}
                    onPress={() =>
                      Actions.accountDetails({ selectedUserId: item.id })
                    }
                    keyExtractor={item.id}
                    title={`${item.fullName}`}
                    avatar={{ uri: item.picture }}
                    containerStyle={{ borderBottomWidth: 0 }}
                  />
                );
              }}
              keyExtractor={item => item.title}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
            />
          </List>
        )}
      </SafeAreaView>
    );
  }
}

const mstp = ({ feed }) => ({ feed });
const mdtp = { fetchFeed };

export default connect(
  mstp,
  mdtp
)(FeedContainer);
