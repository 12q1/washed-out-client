import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, List } from 'react-native-elements'


export default class Comment extends Component {

  state = {
    comments: []
  }

  render() {
    return (
      <View >
        <List>
          <FlatList
            data={this.state.comment}
            renderItem={({ item }) => (
              <ListItem
              />
            ) //need contents
            }
          keyExtractor={item => item.id}
          />
          </List>
      </View>

    )
  }
}
