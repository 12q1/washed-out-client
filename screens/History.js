import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem, List } from 'react-native-elements'
// import HeaderComponent from './HeaderComponent'



export default class History extends Component {

  state = {
    history: [
      { id: 1, date: "12-11-2018", type: "washing", cost: 20 },
      { id: 2, date: "12-11-2018", type: "drying", cost: 10 },
      { id: 3, date: "16-11-2018", type: "washing", cost: 20 },
      { id: 4, date: "16-11-2018", type: "drying", cost: 10 }
    ]
  }

  render() {
    return (
      <View >
        {/* <HeaderComponent/> */}
        <List>
          <FlatList
            data={this.state.history}
            renderItem={({ item }) => (
              <ListItem
                title= {`date: ${item.date}       cost: ${item.cost}` }
                subtitle={` type: ${item.type} `}
              />
            )
            }
          keyExtractor={item => item.id}
          />
          </List>
      </View>

    )
  }
}
