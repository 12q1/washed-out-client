import ApolloClient, { gql } from "apollo-boost";
import React from 'react';
import gql from 'graphql-tag';
import { query } from 'react-apollo';
import ApolloClient from 'apollo-boost';


export const client = new ApolloClient({
    uri: "http://localhost:4000/graphql"
});


function querySignUp (user) {
    return client.query({
        query: gql`
            mutation{
                signUp(
                  fullName:${user.fullName}
                  email:${user.email}
                password:${user.password}
                  bio:${user.bio}
                  picture:${user.picture}
                ){
                  fullName,
                  email
                }
          `
      })
  }