import { gql } from "apollo-boost";
import client from "../../Client";
export const CREATE_MESSAGE_ERROR = "CREATE_MESSAGE_ERROR";
export const CREATED_MESSAGE = "CREATED_MESSAGE";

export default function(fromId, toId, message) {
  return function(dispatch) {
    querySendMessage(fromId, toId, message)
      .then(res => {
        dispatch({
          type: CREATED_MESSAGE,
          payload: res.data.messageSave
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: CREATE_MESSAGE_ERROR
        });
      });
  };
}

function querySendMessage(fromId, toId, { content }) {
  return client.mutate({
    variables: {
      fromId,
      toId,
      content
    },
    mutation: gql`
      mutation messageSave($fromId: Int!, $toId: Int!, $content: String!) {
        messageSave(fromId: $fromId, toId: $toId, content: $content) {
          id
          from {
            id
            fullName
            picture
          }
          to {
            id
            fullName
            picture
          }
          content
        }
      }
    `
  });
}
