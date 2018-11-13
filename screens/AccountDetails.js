/* This is the screen for account details at*/

import React, { Component } from "react";
// import { connect } from "react-redux";
import { View } from 'react-native'
import { Card, Rating, Avatar, Text, Button } from 'react-native-elements'


export default class AccountDetails extends Component {
  state = {
    user: [
      {
        id: 1,
        fullName: 'Brynn',
        picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
    ],
    ratings: 3,
    status: "Available",
    services: [{ serviceName: "washing", cost: 20 }, { serviceName: "drying", cost: 10 }]
  }

  render() {

    return (
      <View >
        {this.state.user && this.state.user.map(user => {
          return (
            <View>
              <Card key={user.id}>
                <View style={{ flexDirection: "row" }} >
                  <Avatar
                    style={{ justifyContent: "flex-start" }}
                    large
                    rounded
                    source={{ uri: user.picture }}
                  />
                  <Card style={{ justifyContent: "flex-end", alignItem: "stretch" }}>
                    <Text> Name: {user.fullName} </Text>
                    <Text> Rating: </Text>
                    <Rating
                      imageSize={20}
                      readonly
                      startingValue={this.state.ratings}
                    />
                    <Text> Status: {this.state.status} </Text>
                  </Card>
                </View>
              </Card>
              <Card>
                <Text style={{ textAlign: "center" }}> Services </Text>
                {this.state.services && this.state.services
                  .map(service => (
                    <Card
                      key={service.serviceName}
                      title={service.serviceName}
                    >
                      <Text style={{ textAlign: "center" }}>{'€' + service.cost}</Text>
                    </Card>
                  ))
                }
              </Card>
              <Card>
                <Button
                  backgroundColor="#1E90FF"
                  clear
                  title='Contact'
                />
              </Card>
            </View>
          )
        })
        }
      </View>
    )
  }
}

// const mdtp = { signUp };

// export default connect(
//   null,
//   mdtp
// )(SignUpContainer);
