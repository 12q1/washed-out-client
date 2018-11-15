import React, { Component } from "react";
import fetchMessages from "../actions/messages/fetch-messages";
import { List, ListItem, SearchBar } from "react-native-elements";
import { View, FlatList } from "react-native";
import { HeaderComponent } from "./HeaderComponent";
import { connect } from "react-redux";
import CreateMessageForm from "../components/CreateMessageForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
class ChatContainer extends Component {
  componentDidMount() {
    this.props.fetchMessages(this.props.user.id, this.props.selectedUserId);
  }

  renderHeader = () => {
    const picture = this.props.user ? this.props.user.picture : "";
    return <HeaderComponent picture={picture} />;
  };

  render() {
    return (
      <KeyboardAwareScrollView style={{ flex: 1 }}>
        {this.props.messages && (
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={this.props.messages}
              renderItem={({ item }) => {
                return (
                  <ListItem
                    titleStyle={{ color: "#000000" }}
                    roundAvatar
                    key={item.id}
                    keyExtractor={item.id}
                    title={`${item.from.fullName}: ${item.content}`}
                    avatar={{ uri: item.from.picture }}
                    containerStyle={{ borderBottomWidth: 0 }}
                    chevronColor="#ffffff"
                  />
                );
              }}
              ListHeaderComponent={this.renderHeader}
            />
          </List>
        )}
        <View>
          <CreateMessageForm selectedUserId={this.props.selectedUserId} />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mstp = ({ user, messages, selectedUser }) => ({
  user,
  messages,
  selectedUser
});
const mdtp = { fetchMessages };

export default connect(
  mstp,
  mdtp
)(ChatContainer);
