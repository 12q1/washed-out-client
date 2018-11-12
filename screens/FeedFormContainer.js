import React, { Component } from 'react';
import { List, ListItem, SearchBar } from 'react-native-elements';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { getUsers } from '../api/index';
import { HeaderComponent } from './HeaderComponent';
import './HeaderComponent.styles';


export default class FeedFormContainer extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          error: null
        };
      }
    
      componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        this.setState({ loading: true });
    
        getUsers()
          .then(users => {
            this.setState({
              loading: false,
              data: users
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      };
    
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
        return (
            <HeaderComponent/>
        );
      };
    
      renderFooter = () => {
        if (!this.state.loading) return null;
    
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
            <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <SearchBar placeholder="Type Here..." lightTheme round />
              <FlatList
                data={this.state.data}
                renderItem={({ item }) => (
                  <ListItem
                    roundAvatar
                    key={item.id}
                    title={`${item.name.first} ${item.name.last}`}
                    avatar={{ uri: item.picture.thumbnail }}
                    containerStyle={{ borderBottomWidth: 0 }}
                  />
                )}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
              />
            </List>
          </SafeAreaView>
        );
      }
    }
        